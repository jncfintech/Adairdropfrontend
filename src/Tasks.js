import React, { useEffect, useState } from "react";
import "./Tasks.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./actions/action";
import axios from "./axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Home from "./images/Home.png";
import Home1 from "./images/Home1.png";
import ARROWBUTTON1 from "./images/arrowbutton1.png";

import ARROWBUTTON from "./images/arrowbutton.png";
import ARRORTICK from "./images/arrowtick.png";
import RIGHTGRAPHIC from "./images/rightgraphic.png";
import MANGRAPHIC from "./images/mangraphic.png";

function Tasks() {
  const navigate = useNavigate();
  // const [allOpeninputtofalse,setAllopeninputtoflase] = useState();
 
  const [email,setEmail] = useState(null);
  const [openBuy, setOpenbuy] = useState(false);
  const [openTweetinput, setOpenTweetinput] = useState(false);
  const [openRetweetInput, setOpenRetweetinput] = useState(false);
  const [openTelegraminput, setOpentelegraminput] = useState(false);
  const [openFollowinput, setOpenfollowinput] = useState(false);
  const [openWalletinput, setOpenwalleinput] = useState(false);
  const [telegramInputname, setTelegraminputname] = useState("");
  const [telegramInputemail, setTelegraminputemail] = useState("");
  const [telegramInput, setTelegraminput] = useState(false);
  const [checkTweet, setChecktweet] = useState("");
  const [checkFollower, setCheckfollower] = useState("");
  const [checkRetweet, setCheckretweet] = useState("");
  const [checkusername, setCheckusername] = useState("");
  const [checkusernameTrueorfalse, setCheckusernameTrueorfalse] =
    useState(false);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [twitterFollow, setTwitterfollow] = useState(false);
  const [joinTelegram, setJointelegram] = useState(false);
  const [buy, setBuy] = useState(false);
  const [retweet, setRetweet] = useState(false);
  const [tweet, setTweet] = useState(false);
  const [walletAddress, setWalletaddress] = useState("");
  const [walletAddressstatus, setWalletaddressstatus] = useState("");
  // const [checkFollowOrnot,setCheckfollowornot] = useState('')
  const loggedUserData = useSelector((state) => state.userReducer.user);
  const [provider, setProvider] = useState(null);

  console.log(loggedUserData);

  console.log(twitterFollow, joinTelegram, retweet, tweet, walletAddress);

  

  const tweetData =
    "Guyzz I have found this intresting Crypto ICO#ZEPCOIN  Its live now. Its $0.0001 $ZEP 🤑🤑 Zep it now.ZIP.....ZAP.....ZOOP🤗🤗🤗visit- https://zepcoin.io/join the community also- https://bit.ly/zepcoin#Zepians #newcrypto";

  const saveretweetstatus = async () => {
    try {
      await axios.post(
        "/saveretweettaskstatus",
        {
          retweet: true,
          loggedUserData: email,
        },
        
      );
    } catch (err) {
      console.log(err);
    }
  };

  const saveBuystatus = async ()=>{
    const response = await axios.post(
      "/savebuystatus",
      {
        buy: true,
        loggedUserData: email,
      },
      
    );

    console.log(response);
    setBuy(true);
  }

  const FetchTasks = async () => {
    const adminloginorlogoutStatus = await axios.get("/adminloginorlogout", {
      withCredentials: true,
    });
    console.log("adminloginorlogoutstatus");
    console.log(adminloginorlogoutStatus);
    dispatch(addUser(adminloginorlogoutStatus.data));

    const followTaskresponse = await axios.post(
      "/fetchfollowtaskresponse",
      {
        loggedUserData: email,
      },
      
    );

    const retweetTaskresponse = await axios.post(
      "/fetchretweetTaskresponse",
      {
        loggedUserData: email,
      },
      
    );

    const walletAddresstaskresponse = await axios.post(
      "/fetchwalletAddressresponse",
      {
        loggedUserData: email,
      },
      
    );

    const tweettaskresponse = await axios.post(
      "/fetchtweettaskresponse",
      {
        loggedUserData: email,
      },
      
    );

    const telegramtaskresponse = await axios.post(
      "/fetchtelegramtaskresponse",
      {
        loggedUserData: email,
      },
      
    );

    const buytaskresponse = await axios.post(
      "/fetchbuytaskresponse",
      {
        loggedUserData: email,
      },
      
    );


    
    setTwitterfollow(followTaskresponse?.data?.twitterFollow);
    setCheckusernameTrueorfalse(retweetTaskresponse?.data?.retweet);
    setTweet(tweettaskresponse?.data?.tweet);
    setJointelegram(telegramtaskresponse?.data?.joinTelegram);
    setBuy(buytaskresponse?.data?.buy)


    if (walletAddresstaskresponse?.data === null) {
      setWalletaddressstatus(false);
    } else {
      setWalletaddressstatus(true);
    }

    if (followTaskresponse?.data?.twitterFollow) {
      setOpenfollowinput(false);
    }

    if (telegramtaskresponse?.data?.joinTelegram) {
      setOpentelegraminput(false);
      setTelegraminput(false);
    }

    console.log("response from fetchfollowtaskresponse");
    console.log(followTaskresponse?.data?.twitterFollow);

    console.log("response from fetchretweetTaskresponse");
    console.log(retweetTaskresponse);

    console.log("response from walletAddresstaskresponse");
    console.log(walletAddresstaskresponse);

    console.log("response from tweettaskresponse");
    console.log(tweettaskresponse);

    console.log("response from telegramtaskresponse");
    console.log(telegramtaskresponse?.data?.joinTelegram);

    console.log("response from buytaskstatus");
    console.log(buytaskresponse?.data?.buy);
    console.log('buy')
    console.log(buy)
  };

  // useEffect(() => {
  //   FetchTasks();
  // }, []);

  const savetweettaskstatus = async () => {
    const response = await axios.post(
      "/savetweettaskstatus",
      {
        tweet: true,
        loggedUserData: email,
      },
      
    );

    console.log(response);
    setOpenTweetinput(false);
  };



  const setLoggeduseremail = async () =>{

    if(email !== null){

    
    setEmail(email)


    const tweetIdtaskresponse = await axios.post('/fetchtweetidtaskresponse',{
      email : email
    })

    // if(tweetIdtaskresponse){

    // }

    console.log('response from tweetIdtaskresponse')
    console.log(tweetIdtaskresponse)
    console.log(tweetIdtaskresponse?.data?.tweetid)

    if(tweetIdtaskresponse.data === null){
      setTwitterfollow(false)
    }else{
      setTwitterfollow(true)
      setOpenfollowinput(false)
    }

    const followTaskresponse = await axios.post(
      "/fetchfollowtaskresponse",
      {
        loggedUserData: email,
      },
      
    );

    const retweetTaskresponse = await axios.post(
      "/fetchretweetTaskresponse",
      {
        loggedUserData: email,
      },
      
    );

    const walletAddresstaskresponse = await axios.post(
      "/fetchwalletAddressresponse",
      {
        loggedUserData: email,
      },
      
    );

    const tweettaskresponse = await axios.post(
      "/fetchtweettaskresponse",
      {
        loggedUserData: email,
      },
      
    );

    const telegramtaskresponse = await axios.post(
      "/fetchtelegramtaskresponse",
      {
        loggedUserData: email,
      },
      
    );

    const buytaskresponse = await axios.post(
      "/fetchbuytaskresponse",
      {
        loggedUserData: email,
      },
      
    );

    
    
    setCheckusernameTrueorfalse(retweetTaskresponse?.data?.retweet);
    setTweet(tweettaskresponse?.data?.tweet);
    setJointelegram(telegramtaskresponse?.data?.joinTelegram);
    setBuy(buytaskresponse?.data?.buy)


    if (walletAddresstaskresponse?.data === null) {
      setWalletaddressstatus(false);
    } else {
      setWalletaddressstatus(true);
    }

    if (followTaskresponse?.data?.twitterFollow) {
      setOpenfollowinput(false);
    }

    if (telegramtaskresponse?.data?.joinTelegram) {
      setOpentelegraminput(false);
      setTelegraminput(false);
    }

    console.log("response from fetchfollowtaskresponse");
    console.log(followTaskresponse?.data?.twitterFollow);

    console.log("response from fetchretweetTaskresponse");
    console.log(retweetTaskresponse);

    console.log("response from walletAddresstaskresponse");
    console.log(walletAddresstaskresponse);

    console.log("response from tweettaskresponse");
    console.log(tweettaskresponse);

    console.log("response from telegramtaskresponse");
    console.log(telegramtaskresponse?.data?.joinTelegram);

    console.log("response from buytaskstatus");
    console.log(buytaskresponse?.data?.buy);
    console.log('buy')
    console.log(buy)

  }else{
    toast.error('Please enter email address', {
      position: 'top-center',
      autoClose: 2000,
    });
  }

  }

 

  return (
    <div className="main__tasks">
    <div className="tasks">
      <img className="tasks__backgroundImage" src={Home1} />
     

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <div className="tasks__left">
        <h1 className="tasks__firstHeading">Hey!</h1>
        <h1 className="tasks__secondHeading second">
          Claim Your Free $10000 Worth of ZEPX
        </h1>

        <div className="task__details__mainBox">

        <div className="tasks__details">
            <div className="tasks__div__top">
                <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter your email'  className='tasks__div__heading email'/>
                <button className="tasks__div__amount"  onClick={setLoggeduseremail}>Start</button>
                {/* <img className="tasks__div__details__arrows" src={ARROWBUTTON1} onclick={ setLoggeduseremail}/> */}

            </div>
         

          <div className="tasks__div">
            <div className="tasks__div__top">
              <h1 className="tasks__div__heading">
                <a
                  target="_blank"
                  href="https://twitter.com/zepcoinofficial"
                  onClick={() => {
                    setOpenfollowinput(true);
                    setOpenbuy(false);
                    setOpenTweetinput(false);
                    setOpenRetweetinput(false);
                    setOpentelegraminput(false);
                    setOpenwalleinput(false);
                  }}
                >
                  Follow @ZEPCOIN on twitter
                </a>
              </h1>
              {twitterFollow ? (
                <img className="tasks__div__details__arrows" src={ARRORTICK} />
              ) : (
                <img
                  className="tasks__div__details__arrows"
                  src={ARROWBUTTON}
                />
              )}
              <h3 className="tasks__div__amount space2">$500</h3>
            </div>

            {openFollowinput ? (
              <div className="tasks__div__bottom">
                <div className="follow__div">
                  {/*  <p className="tasks__div__button">
                    <a
                      target="_blank"
                      href="https://twitter.com/zepcoinofficial"
                      className="tasks__div__links"
                    >
                      Click to Follow
                    </a>
                  </p>
            */}
                  <div className="follow__div__inputAndbutton">
                    <input
                      className="tasks__div__checkFollower"
                      placeholder="Enter twitter user id"
                      value={checkFollower}
                      onChange={(event) => setCheckfollower(event.target.value)}
                    />
                    <button
                      className="tasks__div__checkFollower__button"
                      onClick={async () => {

                        if(email !== null){
                        
                          const response = await axios.post(
                            "/savetweetid",
                            {
                              email : email,
                              tweetid: checkFollower,
                            },
                            
                          );
                          console.log("response from check follower");
                          console.log(response);
                         

                          if (response) {
                      

                            setTwitterfollow(true);
                            setOpenfollowinput(false);

                            console.log(
                              "response.data.relationship.source.followed_by"
                            );
                            
                          } else {
                            console.log("id is not matched with follower");
                            alert("id not matched");
                          }

                        }else{
                          toast.error('Please enter email address', {
                            position: 'top-center',
                            autoClose: 2000,
                          });
                        }
                       
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
            
          </div>

          <div className="tasks__div">
            <div className="tasks__div__top">
              <h1 className="tasks__div__heading">
                {" "}
                <a
                  target="_blank"
                  href="https://t.me/zepverse"
                  onClick={async () => {

                    if(email !== null){

                    
                    const response = await axios.post(
                      "/savetelegramtaskstatus",
                      {
                        joinTelegram: true,
                        loggedUserData: email,
                      },
                      
                    );

                    setJointelegram(true);
                    setOpentelegraminput(false);
                    }else{
                      toast.error('Please enter email address for complete task', {
                        position: 'top-center',
                        autoClose: 2000,
                      });
                    }
                  }}
                  className="tasks__div__links joinTelegram__link"
                >
                  Join @ZEPVERSE on telegram
                </a>
              </h1>
              {joinTelegram ? (
                <img className="tasks__div__details__arrows" src={ARRORTICK} />
              ) : (
                <img
                  className="tasks__div__details__arrows"
                  src={ARROWBUTTON}
                  onClick={() => {
                    setOpentelegraminput(true);
                    setOpenfollowinput(false);
                    setOpenbuy(false);
                    setOpenTweetinput(false);
                    setOpenRetweetinput(false);
                    setOpenwalleinput(false);
                  }}
                />
              )}
              <h3 className="tasks__div__amount">$2000</h3>
            </div>

            {/*{openTelegraminput ? (
            //   <>
            //     <a
            //       target="_blank"
            //       href="https://t.me/zepCoinOfficial"
            //       className="tasks__div__links joinTelegram__link"
            //     >
            //       Click to Join
            //     </a>

            //     <button
            //       className="joinTelegram__continueButton"
            //       onClick={() => {
            //         setTelegraminput(true);
            //       }}
            //     >
            //       continue
            //     </button>

            //     {telegramInput ? (
            //       <div className="telegramInput">
            //         <input
            //           value={telegramInputname}
            //           className="joinTelegram__input"
            //           placeholder="Enter Email"
            //           onChange={(event) => {
            //             setTelegraminputname(event.target.value);
            //           }}
            //         />

            //         <input
            //           value={telegramInputemail}
            //           className="joinTelegram__input"
            //           placeholder="Enter Name"
            //           onChange={(event) => {
            //             setTelegraminputemail(event.target.value);
            //           }}
            //         />

            //         <button
            //           className="joinTelegram__button"
            //           onClick={async () => {
            //             const response = await axios.post(
            //               "/savetelegramtaskstatus",
            //               {
            //                 joinTelegram: true,
            //                 loggedUserData: loggedUserData,
            //               },
            //               
            //             );

            //             setJointelegram(true);
            //             setOpentelegraminput(false);
            //           }}
            //         >
            //           save
            //         </button>
            //       </div>
            //     ) : null}
            //   </>
          // ) : null} */}
          </div>

          <div className="tasks__div">
            <div className="task__div__top">
              <h1 className="tasks__div__heading">
                <a
                  target="_blank"
                  href="https://twitter.com/zepcoinofficial/status/1578713322530426882?s=46&t=dFMJzhB-INFRfwmRxXDpKQ"
                  className="tasks__div__links"
                  onClick={() => {
                    if(email !== null ){

                    
                    setRetweet(true);
                    setCheckusernameTrueorfalse(true);
                    saveretweetstatus();
                    }else{
                      toast.error('Please enter email address for complete task', {
                        position: 'top-center',
                        autoClose: 2000,
                      });
                    }
                  }}
                >
                  Retweet @ZEPCOIN on twitter
                </a>
              </h1>
              {checkusernameTrueorfalse ? (
                <img className="tasks__div__details__arrows" src={ARRORTICK} />
              ) : (
                <img
                  className="tasks__div__details__arrows"
                  src={ARROWBUTTON}
                  onClick={() => {
                    setOpenRetweetinput(true);
                    setOpenfollowinput(false);
                    setOpenbuy(false);
                    setOpenTweetinput(false);
                    setOpentelegraminput(false);
                    setOpenwalleinput(false);
                  }}
                />
              )}
              <h3 className="tasks__div__amount">$2000</h3>
            </div>

            {/* {openRetweetInput
              ? [
                  <div className="openretweetinput">
                    {" "}
                    <a
                      target="_blank"
                      href="https://twitter.com/zepcoinofficial"
                      className="tasks__div__links"
                      onClick={() => setRetweet(true)}
                    >
                      Click to Retweet
                    </a>
                    <input
                      className="tasks__div__checkRetweet retweetInput"
                      placeholder="enter retweet page id"
                      value={checkRetweet}
                      onChange={(event) => {
                        setCheckretweet(event.target.value);
                      }}
                    />
                    <input
                      className="retweetInput"
                      placeholder="enter twitter user name to check retweet"
                      value={checkusername}
                      onChange={(event) => setCheckusername(event.target.value)}
                    />
                    <button
                      className="retweetButton"
                      onClick={async () => {
                        try {
                          const response = await axios.post(
                            "/checkretweeted",
                            {
                              checkRetweet: checkRetweet,
                            },
                            
                          );
                          console.log("response from checkretweeted");
                          console.log(response);

                          const retweetDoneornot = response?.data?.data?.map(
                            (data) => {
                              console.log(data.username);

                              if (data.username === checkusername) {
                                setCheckusernameTrueorfalse(true);
                                setOpenRetweetinput(false);
                                console.log(
                                  "checkusernameTrueorfalse response form the server"
                                );
                                console.log(checkusernameTrueorfalse);
                                //  if(checkusernameTrueorfalse){

                                // saveretweetstatus();
                                return 1;
                                //  }
                              } else {
                                return 0;
                              }
                            }
                          );

                          // console.log('retweetDoneornot')
                          // console.log(retweetDoneornot)

                          const responseFromretweetDoneornot =
                            retweetDoneornot.map((data) => {
                              console.log(data);
                              if (data) {
                                console.log("retweet done");
                                saveretweetstatus();
                              } else {
                                return 0;
                                console.log("retweet not done");
                              }
                            });

                          console.log("retweetDoneornot");
                          console.log(responseFromretweetDoneornot);

                          if (responseFromretweetDoneornot) {
                            alert("retweet not done yet");
                          }
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    >
                      Continue
                    </button>{" "}
                  </div>,
                ]
              : null}
              */}
          </div>

          <div className="tasks__div">
            <div className="tasks__div__top">
              <h1 className="tasks__div__heading tweet__on__twitter">
                <a
               onClick={()=>{
                if(email !== null){
                {
                  setTweet(true)

                          savetweettaskstatus()
                }}else{
                  toast.error('Please enter email address for complete task', {
                    position: 'top-center',
                    autoClose: 2000,
                  });
                }
               }}
                  target="_blank"
                  href="https://twitter.com/intent/tweet?text=The new crypto ICO celebration is here
                  #ZEPX #zepcoin a token for the advanced universe @zepverse .
                  
                  Buy the ICO and get a chance to enter #zepians community.
                  10000 $ZEPX for $1. also free Airdrop worth $10000.
                  
                  Visit- zepcoin.io
                  #cryptomarket #Bitcoin #BINANCE"
                >
                  Tweet @ZEPCOIN on twitter
                </a>
              </h1>

               {tweet ? (
                <img className="tasks__div__details__arrows" src={ARRORTICK} />
              ) : (
                <img
                  className="tasks__div__details__arrows"
                  src={ARROWBUTTON}
                  
                />
                )}
                <h3 className="tasks__div__amount">$2000</h3>
            </div>

          {/*  {openTweetinput
              ? [
                  <div className="tweet__div">
                    <a
                      target="_blank"
                      href="https://twitter.com/intent/tweet?text=Guyzz I have found this intresting Crypto ICO 
    Its live now. Its $0.0001 $ZEP 🤑🤑 Zep it now.
    
    
    ZIP.....ZAP.....ZOOP🤗🤗🤗
    
    visit- https://zepcoin.io/
    join the community also- https://bit.ly/zepcoin
    #Zepians #newcrypto"
                      className="tasks__div__links"
                    >
                      Click For Tweet
                    </a>
                    <input
                      className="tasks__div__checkTweet tweetInput"
                      placeholder="Enter tweet Id"
                      value={checkTweet}
                      onChange={(event) => setChecktweet(event.target.value)}
                    />
                    <button
                      className="tasks__div__checkTweet__button tweetButton"
                      onClick={async () => {
                        const response = await axios.post(
                          "/checktweet",
                          {
                            tweetId: checkTweet,
                          },
                          
                        );

                        console.log("response from tweet id");

                        console.log(response.data);

                        if (response.data) {
                          setTweet(response.data);

                          savetweettaskstatus();
                        } else {
                          console.log("not followed");
                          alert("not tweeted  yet");
                        }
                      }}
                    >
                      Continue
                    </button>{" "}
                  </div>,
                ]
              : null}
              */}
          </div>

          <div className="tasks__div">
            <div className="tasks__div__details">
              <div className="task__div__top">              
                <h1 className="tasks__div__heading">
                  <a
                    onClick={() => {
                      setOpenwalleinput(true);
                      setOpenbuy(false);
                      setOpenTweetinput(false);
                      setOpenRetweetinput(false);
                      setOpentelegraminput(false);
                      setOpenfollowinput(false);
                    }}
                  >
                    {" "}
                    Enter your Cryto Wallet Address{" "}
                  </a>
                  
                </h1>
                {walletAddressstatus ? (
                  <img
                    className="tasks__div__details__arrows"
                    src={ARRORTICK}
                  />
                ) : (
                  <img
                    className="tasks__div__details__arrows"
                    src={ARROWBUTTON}
                  />
                )}
                <h3 className="tasks__div__amount">$1000</h3>
               
              </div>

              {openWalletinput ? (
                <div className="tasks__div__bottom">
                  <input
                    value={walletAddress}
                    onChange={(e) => setWalletaddress(e.target.value)}
                    placeholder="type wallet address"
                    className="tasks__div__bottom_input"
                  />

                  <button
                    className="tasks__div__bottom__submit__button"
                    onClick={async () => {
                      if(email !== null){
                      const response = await axios.post(
                        "/savewallettaskstatus",
                        {
                          walletAddress: walletAddress,
                          loggedUserData: email,
                        },
                        
                      );

                      if (response) {
                        setWalletaddressstatus(true);
                        setOpenwalleinput(false);
                      } else {
                        setWalletaddressstatus(false);
                      }
                    }else{
                      toast.error('Please enter email address for complete task', {
                        position: 'top-center',
                        autoClose: 2000,
                      });
                    }
                    }}
                  >
                    Submit
                  </button>
                </div>
              ) : null}
            </div>
          </div>

          <div className="tasks__div">
            <div className="tasks__div__top">
              <h1 className="tasks__div__heading buy"> <a
            
              onClick={() =>{ 
               
                saveBuystatus();
                 setBuy(true)
                
              }}
              href="https://zepcoin.link/"
              className="tasks__div__links buyButton__link"
            >Buy ICO-ZEPCOIN </a></h1>
              {buy ? (
                <img className="tasks__div__details__arrows" src={ARRORTICK} />
              ) : (
                <img
                  className="tasks__div__details__arrows"
                  src={ARROWBUTTON}
                  
                />
              )}
              <h3 className="tasks__div__amount">$2500</h3>
            </div>

           {/* {openBuy ? (
              <button className="tasks__div__button buyButton">
                <a
                  target="_blank"
                  href="https://zepcoin.link/"
                  className="tasks__div__links buyButton__link"
                  onClick={() => setBuy(true)}
                >
                  BUY NOW
                </a>
              </button>
           ) : null} */}
          </div>
        </div>

        </div>

      </div>

      <div className="tasks__right">
        <img src={RIGHTGRAPHIC} className="tasks__right__rightgraphic" />
        <img src={MANGRAPHIC} className="task__right__mangraphic" />
      </div>
    </div>
    </div>
  );
}

export default Tasks;
