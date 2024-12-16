import React, { useContext,useState, useEffect } from 'react';
import FileUploadForm from './FileUploadForm';
import {
  arifs,
  backb,
  chapas,
  checks,
  scs,
  cbe,
  cbebirr,
  telebirr,
  tgar,
  dashn,
  cbee,
  tele,
  awash,
  abis,
  uploadd,
  arrow,
} from '../../assets';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../Loader';


function PaymentChoose() {

  const [data, setData] = useState([]);
  const [loadings, setLoadings] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('v4/student/getHomePageData');
      setData(response);
      
     
    } catch (error) {
      
    } finally {
      setLoadings(false);
    }
    
  };


  const [selected, setSelected] = useState('arifs');
  const [paymentMethod, setPaymentMethod] = useState('telebirr');
  
  const [paymentMethods, setPaymentMethods] = useState('');
  const [price, setPrice] = useState();
  const [buttonName, setButtonName] = useState('FRESHMAN BASIC');
  const [expireDate, setExpireDate] = useState(new Date(Date.now() + 5 * 60 * 1000).toISOString());
  const [notification, setNotification] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isBlurry, setIsBlurry] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const [selectedPayment, setSelectedPayment] = useState('cbee');

  const navigate = useNavigate();
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");

  // Callback to be passed to the PaymentForm to handle the result
  const handleUploadSuccess = (message) => {
    setUploadSuccess(true);
    setUploadMessage(message);
  }
  const paymentDetails = {
    cbee: { name: 'Brook Fantahun Gebremeskel', number: '1000218150628', img: cbee },
    tele: { name: 'Brook Fantahun', number: '0953134956', img: tele },
    dashn: { name: 'Esrom Sharew Tadesse', number:'5208703554011', img: dashn },
    abis: { name: 'Esrom Sharew Tadesse', number: '7000056526035', img: abis },
    awash: { name: 'Esrom Sharew Tadess', number: ' 01320944351300', img: awash },
  };

  // Get the details of the selected payment method
  const { name, number, img } = paymentDetails[selectedPayment];



  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the file (e.g., store in state, upload, etc.)
      console.log(file);
    }
  };
  const [paymentData, setPaymentData] = useState({
    paymentMethods: ['TELEBIRR'],
    phone: '',
    email: 'zegjuexamprep@gmail.com',
    items: [{ name: '', quantity: 1, price: '', description: '', image: '' }],
    beneficiaries: [{ accountNumber: '01320811436100', bank: 'AWINETAA', amount: 1 }],
    lang: 'EN',
    nonce: generateNonce(),
    cancelUrl: 'https://example.com',
    errorUrl: 'http://error.com',
    notifyUrl: 'https://zegeju-1453f.uc.r.appspot.com/api/v12/student/directPaymentCallBack',
    successUrl: 'http://example.com',
    expireDate,
  });

  function generateNonce() {
    const array = new Uint32Array(4);
    window.crypto.getRandomValues(array);
    return Array.from(array, num => num.toString(36)).join('');
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newExpireDate = new Date(Date.now() + 5 * 60 * 1000).toISOString();
      setExpireDate(newExpireDate);
      setPaymentData(prevData => ({ ...prevData, expireDate: newExpireDate }));
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

useEffect(() => {
  if (!data || !data.data) return;

  const buttonStatus = localStorage.getItem('buttonStatus') || 'FRESHMAN BASIC';
  let calculatedPrice = data.data.freshCourseData.basicPrice;

  switch (buttonStatus) {
    case 'UAT':
      calculatedPrice = data.data.uatData.price;
      setButtonName('AAU UAT');
      break;
    case 'Pro':
      calculatedPrice = data.data.freshCourseData.proPrice;
      setButtonName('FRESHMAN PRO');
      break;
    case 'Prem':
      calculatedPrice = data.data.freshCourseData.premiumPrice;
      setButtonName('FRESHMAN PREMIUM');
      break;
    case 'GAT':
      calculatedPrice = data.data.gatData.price;
      setButtonName('GAT');
      break;
    case 'EAA':
      calculatedPrice = data.data.eaaData.price;
      setButtonName('EAA');
      break;
    case 'SAT':
      calculatedPrice = data.data.satData.price;
      setButtonName('SAT');
      break;
    case 'IELTS':
      setButtonName('IELTS');
      break;
    case 'MAT':
      setButtonName('MATRIC');
      break;
    case 'TOEFL':
      setButtonName('TOEFL');
      break;
    default:
      calculatedPrice = data.data.freshCourseData.basicPrice;
      setButtonName('FRESHMAN BASIC');
      break;
  }

  // Set price and payment data
  setPrice(calculatedPrice.toFixed(2));
  setPaymentData(prevData => ({
    ...prevData,
    items: [{ ...prevData.items[0], name: buttonName, price: calculatedPrice }],
    beneficiaries: [{ ...prevData.beneficiaries[0], amount: calculatedPrice }],
    nonce: generateNonce(),
  }));
}, [data, buttonName]);


  const handleButtonClick = (button) => {
    setSelected(button);
    if (button === 'chapas') {
      navigate('/Chapa');
    }
  };

  const handlePaymentMethodClick = (method) => {
    setPaymentMethod(method);
    setPaymentData(prevData => ({
      ...prevData,
      paymentMethods: [method.toUpperCase()],
    }));
  };

  
    const handlePaymentMethodClicks = (method) => {
      setPaymentMethods(method);
    };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^9\d{8}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const trimmedValue = value.replace(/\D/g, '');
      if (validatePhoneNumber(trimmedValue)) {
        setPhoneError('');
      } else {
        setPhoneError('Phone number must start with 9 and have 8 digits following +251.');
      }
      setPaymentData(prevData => ({ ...prevData, [name]: trimmedValue }));
    } else {
      setPaymentData(prevData => ({ ...prevData, [name]: value }));
    }
  };

  const initiatePayment = async () => {
    if (!validatePhoneNumber(paymentData.phone)) {
      setPhoneError('Please enter a valid phone number.');
      return;
    }

    setIsLoading(true); // Start loading
    const newNonce = generateNonce();
    const fullPhoneNumber = `251${paymentData.phone}`;

    const updatedPaymentData = {
      ...paymentData,
      nonce: newNonce,
      phone: fullPhoneNumber,
    };

    try {
      let response;
      if (paymentMethod === 'cbe') {
        const cbeData = {
          ...updatedPaymentData,
          notifyUrl: 'https://zegeju-1453f.uc.r.appspot.com/api/v12/student/directCbePaymentCallBack',
          paymentMethods: ['CBE'],
        };
        response = await axios.post('v12/student/directCbePayment', cbeData, {
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        response = await axios.post('v12/student/directPayment', updatedPaymentData, {
          headers: { 'Content-Type': 'application/json' },
        });
      }
      console.log(response.data);
      if (response?.data) {
        setNotification('Your payment is being processed. Please wait for the USSD popup.');
        handleConfirmPayment(); // Show confirmation popup
      }
    } catch (error) {
      console.error('Payment error:', error.response ? error.response.data : error.message);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  const handleConfirmPayment = () => {
    setShowPopup(true);
    setTimeout(() => setAnimateOut(true), 3000);
    setTimeout(() => {
      setShowPopup(false);
      setAnimateOut(false);
    }, 3500);
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  useEffect(() => {
    const updatedNonce = generateNonce();
    setPaymentData(prevData => ({ ...prevData, nonce: updatedNonce }));
  }, [buttonName, price]);

  useEffect(() => {
    const eventSource = new EventSource('https://zegeju-1453f.uc.r.appspot.com/api/v12/student/paymentCallBackEvent');

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log(event.data);

        if (data.status === 'success') {
          setStatusMessage('Payment successful!');
          setIsBlurry(false);
          setTimeout(() => navigate('/'), 3000);
        } else if (data.status === 'failed') {
          setStatusMessage('Payment failed! Please try again.');
          setIsBlurry(true);
        }
      } catch (error) {
        console.error('Error parsing event data:', error);
      }
    };

    return () => eventSource.close();
  }, [navigate]);
  if (loadings  || !data) {
    return <div className="flex items-center justify-center min-h-screen">
    <Loader />
  </div> // Display loading message
  }
  return (
    <div className='bg-[#ecf7f8] min-h-screen flex justify-center'>
     {notification && (
  <div className="fixed top-0 left-0 right-0 bg-blue-500 text-white px-4 py-2 rounded-b-md shadow-md z-50">
    {notification}
  </div>
)}
    <Link to='/'>
        <button className='absolute top-4 left-4 transition-transform duration-300 hover:scale-110'>
          <img src={backb} alt='Back' />
        </button>
      </Link>
      <div className='flex'>
        <div className='md:flex pt-[80px] md:pt-[60px]'>
          <div className='flex md:block space-x-2 md:block md:space-y-4 md:pr-4'>
            {['arifs', 'chapas', 'scs'].map((button) => (
              <button
                key={button}
                onClick={() => handleButtonClick(button)}
                className={`relative w-[117px] md:w-[350px] h-[56px] md:h-[140px] flex flex-col justify-center items-center rounded-md transition-all duration-300 shadow-md ${
                  selected === button
                    ? 'border-[0.98px] border-[#0fa958] bg-[rgba(15,169,88,0.05)]'
                    : 'bg-white'
                } hover:bg-[rgba(15,169,88,0.15)]`}
              >
                <img
                  src={
                    button === 'chapas'
                      ? chapas
                      : button === 'arifs'
                      ? arifs
                      : scs
                  }
                  alt={button}
                  className='w-[80px] h-[40px] md:w-[160px] md:h-[80px]'
                />
                {button === 'scs' && (
                  <p className='text-sm text-green md:text-[22px] text-[13px] text-teal-600 font-semibold'>
                    (Contact Us)
                  </p>
                )}
                {selected === button && (
                  <img
                    src={checks}
                    alt='Check'
                    className='absolute md:top-2 md:right-2 top-1 right-1 md:w-6 md:h-6 w-3 h-3'
                  />
                )}
              </button>
            ))}
          </div>

          {selected === 'arifs' && (
            <div className='space-y-4 pt-4 md:pt-0'>
              <div className='bg-white md:w-[736px] w-[360px] md:h-[140px] h-[86px] flex justify-between items-center rounded-md shadow-md'>
                <div className='md:space-x-32 space-x-12  items-center pl-6 md:pl-12'>
                  {['telebirr', 'cbe'].map((method) => (
                    <button
                      key={method}
                      onClick={() => handlePaymentMethodClick(method)}
                      className={`relative transition-all duration-300 border-[0.98px] ${
                        paymentMethod === method
                          ? 'border-[0.98px] border-[#0fa958] bg-[rgba(15,169,88,0.05)]'
                          : 'bg-white'
                      } hover:bg-[rgba(15,169,88,0.15)] rounded-md p-2`}
                    >
                      <img
                        src={method === 'telebirr' ? telebirr : cbebirr}
                        className='md:w-[215px] w-[115px] md:h-[70px] h-[34px]'
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className='bg-white md:w-[736px] w-[361px] md:h-[214px] h-[187px] rounded-md shadow-md'>
                <div className='flex items-center justify-center'>
                  <form className='md:w-[680px] flex flex-col items-center md:mt-[40px] mt-[50px]'>
                    <label htmlFor="phone" className='md:text-lg md:text-[32px] font-semibold mb-2'>
                      Phone Number
                    </label>
                    <div className='flex items-center'>
                      <input
                        type="text"
                        value="+251"
                        readOnly
                        className='border border-gray-600 p-2 rounded-l-md pl-3 pr-2 bg-gray-200 w-[70px]'
                      />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={paymentData.phone}
                        onChange={handleChange}
                        className='border border-gray-600 p-2 rounded-r-md pl-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[calc(100%-70px)]'
                        required
                      />
                    </div>
                    {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
                  </form>
                </div>
                <div className='bg-black md:w-[736px] md:h-[45px] md:mt-[60px] mt-[40px] rounded-b-lg'>
                  <div className='flex items-center justify-between pl-16 pr-16 pt-1'>
                    <p className='text-white md:text-[24px] text-[13px]'>{buttonName}</p>
                    <p className='text-white md:text-[24px] text-[13px]'>{price} ETB</p>
                  </div>
                </div>
              </div>

              <div className="payment-choose md:pt-4">
                <button
                  onClick={() => {
                    handleConfirmPayment();
                    initiatePayment();
                  }}
                  className="confirm-button absolute md:w-[736px] w-[361px] md:h-[62px] h-[52px] rounded-[6px] bg-[rgba(150,109,237,1)] text-white md:text-lg text-[16px] font-semibold transition duration-300 hover:bg-[rgba(150,109,237,0.8)]"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    </div>
                  ) : (
                    "Confirm Payment"
                  )}
                </button>

                                {showPopup && (
                                    <div className={`popup ${animateOut ? 'slide-out-right' : ''}`}>
                                        <p>Check your balance if a notification doesn’t appear on your phone in a few seconds.</p>
                                        <p>በ ጥቂት ደቂቃዎች ውስጥ የሚስጥር ቁጥሮን የሚጠይቅ ማሳወቂያ በስልክዎ ላይ ካልታየ ቀሪ ሂሳብዎን ያረጋግጡ።</p>
                                    </div>
                                )}
                            </div>

                            <div className='space-y-2 pt-[100px] pb-12 w-[354px] md:w-[800px]'>
                                <div className='flex'>
                                    <div className="md:w-[96px] w-[55px] md:h-[40px] h-[23px] bg-[rgba(150,109,237,1)] md:rounded-lg rounded-md flex items-center justify-center">
                                        <p className="text-center text-white font-inter md:text-[24px] text-[13px]">step 1</p>
                                    </div>
                                    <div className='ml-3'>
                                        <p className='md:text-[24px] text-[13px]'>ከቴሌብር እና CBE መክፈል የምትፈልጉበትን የክፍያ አማራጭ ምረጡ</p>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className="md:w-[96px] w-[55px] md:h-[40px] h-[23px] bg-[rgba(150,109,237,1)] md:rounded-lg rounded-md flex items-center justify-center">
                                        <p className="text-center text-white font-inter md:text-[24px] text-[13px]">step 2</p>
                                    </div>
                                    <div className='ml-3'>
                                        <p className='md:text-[24px] text-[13px]'>ክፍያ የምትፈፅሙበትን ስልክ ቁጥር አስገቡ</p>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className="md:w-[126px] w-[115px] md:h-[40px] h-[23px] bg-[rgba(150,109,237,1)] rounded-lg flex items-center justify-center">
                                        <p className="text-center text-white font-inter md:text-[24px] text-[13px]">step 3</p>
                                    </div>
                                    <div className='ml-3'>
                                        <p className='md:text-[24px] text-[13px]'>“Confirm Payment” የሚለውን ስትነኩት ክፍያ ወደሚደረግበት ስልክ ቁጥር PIN እንድታስገቡ የሚጠይቅ የማረጋገጫ ምልክት ይደርሳቹሃል።<br />ከዛም ቲሌብር ከመረጣቹ የ ቴሌብራችሁን ፣ ሲቢኢ ከመረጣቹ የ ሲቢኢ ብር PIN በማስገባት ክፍያውን ታጠናቅቃላችሁ።</p>
               </div>
      </div>

                        </div>
                        </div>
                    )}

                    {selected === 'scs' && (
                          
                            <div className="space-y-4 pt-6 md:pt-0">
                              <div className="flex justify-center md:space-x-6 space-x-1">
                                {Object.keys(paymentDetails).map((method) => (
                                  <button
                                    key={method}
                                    onClick={() => setSelectedPayment(method)}
                                    className={`relative transition-all duration-300 flex items-center justify-center ${
                                      selectedPayment === method
                                        ? 'border-[0.98px] border-[#0fa958] bg-[rgba(15,169,88,0.05)]'
                                        : 'bg-white border-[0.98px] shadow-md'
                                    } hover:bg-[rgba(15,169,88,0.15)] rounded-md p-2`}
                                  >
                                    <img
                                      src={paymentDetails[method].img}
                                      className="md:w-[87px] w-[47px] md:h-[77px] h-[34px]"
                                      alt={`${method} logo`}
                                    />
                                  </button>
                                ))}
                              </div>
                        
                              {/* Display Selected Payment Information */}
                              <div className="bg-white md:w-[736px] w-[360px] md:h-[79px] h-[38px]  rounded-md shadow-md flex items-center justify-center">
                                <img src={img} className="md:w-[39px] md:h-[51px] w-[30px] h-[40px] pr-2" alt="Selected Payment Logo" />
                                <p className="pr-2 text-gray-800 font-semibold md:text-[18px] text-[12px] ">{name}</p>
                                <span className="md:text-lg text-[12px] font-bold text-gray-700">→</span>
                                <p className="pl-4 text-gray-800 md:text-[18px] text-[12px] font-semibold">{number}</p>
                              </div>
                          


                         <div className='bg-white md:w-[736px] w-[361px] md:h-[214px] h-[187px] rounded-md shadow-md'>
                           <div className='flex items-center justify-center'>
                             <div className='md:w-[680px] flex flex-col items-center md:mt-[40px] mt-[50px]'>
                              
                               <div className='flex flex-col space-y-4'>
                              
                                  <div className='flex items-center'>
                                    <FileUploadForm/>
                                  
        
      
    
                                    
                                  </div>
                                </div>
                             
                             </div>
                           </div>
                           <div className='bg-black md:w-[736px] md:h-[45px] md:mt-[30px] mt-[20px] rounded-b-lg'>
                             <div className='flex items-center justify-between pl-16 pr-16 pt-1'>
                               <p className='text-white md:text-[24px] text-[13px]'>{buttonName}</p>
                               <p className='text-white md:text-[24px] text-[13px]'>{price} ETB</p>
                             </div>
                           </div>
                         </div>
                         <div className='space-y-2 md:pt-[20px] pt-16 pb-12 w-[354px] md:w-[800px]'>
                                <div className='flex'>
                                    <div className="md:w-[96px] w-[55px] md:h-[40px] h-[23px] bg-[rgba(150,109,237,1)] md:rounded-lg rounded-md flex items-center justify-center">
                                        <p className="text-center text-white font-inter md:text-[24px] text-[13px]">step 1</p>
                                    </div>
                                    <div className='ml-3'>
                                        <p className='md:text-[24px] text-[13px]'>ሁሉም የክፍያ አማራጮች ካስቸገሯችሁ ቴለግራም ላይ @zegjusupport ላይ አነጋግሩን።</p>
                                    </div>
                                </div>
                                </div>
                        
                        
                         
                        </div>

                        
                    )}
                </div>
            </div>
        </div>
    );
}

export default PaymentChoose;