import React from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import ImageUploading from "react-images-uploading";
import "./index.css";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
export default function Form() {
  const [startDate, setStartDate] = useState(new Date());
  const mindate = new Date("2000/02/24");
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setthird] = useState(false);
  const maxdate = new Date("2023/02/24");
  const [text, setText] = useState("Click or Drag to add image");
  const maxallowedAge = new Date("2006/02/24");
  const minallowedAge = new Date("2005/02/24");
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const [numImage, setnum] = useState(0);
  const [imageerror, setimageerror] = useState("");
  const [name, setName] = useState("");
  const [Lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Select Gender");
  const [phonenumber, setPhonenumber] = useState("");
  const [nameError, setnameError] = useState("");
  const [emailError, setemailError] = useState("");
  const [phoneNumberError, setphoneNumberError] = useState("");
  const [emptyError, setEmptyerror] = useState("");
  const [show, setShow] = useState(false);
  const [showdata, setShowdata] = useState(false);
  const [nameLabel, setNameLabel] = useState(true);
  const [lastNameLabel, setLastNameLabel] = useState(true);
  const [lastNameerror, setLastNameerror] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [emailLable, setemailLable] = useState(true);
  const [fatherNameerror, setFatherNameerror] = useState("");
  const [fatherNameLabel, setFatherNameLabel] = useState(true);
  const [genderError, setgenderError] = useState("");
  const [daterror, setDateerror] = useState("");
  const [phoneLable, setphoneLable] = useState(true);
  const [Data, setData] = useState([
    {
      name: "",
      lastname: "",
      fatherName: "",
      phonenumber: "",
      email: "",
      DOB: "",
      image: "",
      gender: "",
    },
  ]);
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };
  const checkfirst = () => {
    if (name === "" || fatherName === "" || Lastname === "") {
      setEmptyerror("All fields are mondatory");
      setTimeout(() => {
        setEmptyerror("");
      }, 1350);
      return false;
    }
    if (!name.match(/^[A-Za-z]+$/)) {
      setnameError("Name should contain only Aphabets");
      setTimeout(() => {
        setnameError("");
        setName("");
        setNameLabel(true);
      }, 1350);
      return false;
    }
    if (!Lastname.match(/^[A-Za-z]+$/)) {
      setLastNameerror("Last Name should contain only Aphabets");
      setTimeout(() => {
        setLastNameerror("");
        setLastName("");
        setLastNameLabel(true);
      }, 1350);
      return false;
    }
    if (!fatherName.match(/^[A-Za-z]+$/)) {
      setFatherNameerror("Father Name should contain only Aphabets");
      setTimeout(() => {
        setFatherNameerror("");
        setFatherName("");
        setFatherNameLabel(true);
      }, 1350);

      return false;
    }
    setData([
      {
        name: name,
        lastname: Lastname,
        fatherName: fatherName,
      },
    ]);
    return true;
  };
  const checkLast = () => {
    if (!phonenumber.match(/^\d+$/)) {
      setphoneNumberError(
        "Phone number should contain only Numerals without any spaces"
      );
      setTimeout(() => {
        setphoneNumberError("");
        setPhonenumber("");
        setphoneLable(true);
      }, 1350);
      return false;
    }
    if (phonenumber.charAt(0) === 0) {
      setphoneNumberError("Phone number cannot start with 0");
      setTimeout(() => {
        setphoneNumberError("");
        setPhonenumber("");
        setphoneLable(true);
      }, 1350);
      return false;
    }
    if (email === "" || phonenumber === "") {
      setEmptyerror("All fields are mondatory");
      setTimeout(() => {
        setEmptyerror("");
        setphoneLable(true);
        setemailLable(true);
      }, 1350);
      return false;
    }
    if (!email.includes("@")) {
      setemailError("Email must contain @");
      setTimeout(() => {
        setemailError("");
        setEmail("");
        setemailLable(true);
      }, 1350);
      return false;
    }
    if (phonenumber.length !== 10) {
      setphoneNumberError("Phone number must be of 10 digits");
      setTimeout(() => {
        setphoneNumberError("");
        setPhonenumber("");
        setphoneLable(true);
      }, 1350);
      return false;
    }
    if (startDate > maxallowedAge) {
      setDateerror("Opps You can't be that old to enter");
      setTimeout(() => {
        setDateerror("");
        setStartDate(maxdate);
      }, 1350);
      return false;
    }
    if (startDate < minallowedAge) {
      setDateerror("Opps You can't be that young to enter");
      setTimeout(() => {
        setDateerror("");
        setStartDate(maxdate);
      }, 1350);
      return false;
    }
    setData([
      {
        name: Data[0].name,
        lastname: Data[0].lastname,
        fatherName: Data[0].fatherName,
        phonenumber: phonenumber,
        email: email,
        DOB: startDate,
      },
    ]);
    return true;
  };
  const handleFirst = () => {
    const check = checkfirst();
    if (check) {
      setFirst(false);
      setSecond(true);
    }
    console.log(check);
  };
  const handleSecond = () => {
    const check = checkLast();
    if (check) {
      setSecond(false);
      setthird(true);
    }
  };
  const handleSubmit = () => {
    if (numImage < 1) {
      setimageerror("Hey! Please enter an image");
      setTimeout(() => {
        setimageerror("");
      }, 1350);
      return false;
    }
    if (gender === "Select Gender") {
      setgenderError("Hey! Please Select Gender");
      setTimeout(() => {
        setgenderError("");
      }, 1350);
      return false;
    }
    setData([
      {
        name: Data[0].name,
        lastname: Data[0].lastname,
        fatherName: Data[0].fatherName,
        phonenumber: Data[0].phonenumber,
        email: Data[0].email,
        DOB: Data[0].DOB,
        image: images[0] ? images[0]["data_url"] : "",
        gender: gender,
      },
    ]);
    setFirst(false);
    setSecond(false);
    setthird(false);
    setShowdata(true);
    return true;
  };
  return (
    <Container>
      <div className={`form ${showdata === true ? "formShow" : ""}`}>
        {first === true ? (
          <div className="first">
            <div className="user">
              <input
                value={name}
                type="text"
                className={`Firstname ${
                  nameError.length > 0 || emptyError.length > 0
                    ? "invalid"
                    : "."
                } `}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onFocus={() => {
                  setNameLabel(true);
                }}
                onBlur={() => {
                  if (name.length > 0) {
                    setNameLabel(false);
                  } else {
                    setNameLabel(true);
                  }
                }}
              />
              <label className={`${nameLabel === false ? "hide" : ""}`}>
                Username
              </label>
              {nameError && <div className="error">{nameError}</div>}
            </div>
            <div className="user">
              <input
                type="text"
                value={Lastname}
                className={`lastname ${
                  lastNameerror.length > 0 || emptyError.length > 0
                    ? "invalid"
                    : "."
                } `}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                onFocus={() => {
                  setLastNameLabel(true);
                }}
                onBlur={() => {
                  if (Lastname.length > 0) {
                    setLastNameLabel(false);
                  } else {
                    setLastNameLabel(true);
                  }
                }}
              />
              <label className={` ${lastNameLabel === false ? "hide" : "."}`}>
                LastName
              </label>
              {lastNameerror && <div className="error">{lastNameerror}</div>}
            </div>
            <div className="user">
              <input
                type="text"
                value={fatherName}
                className={`father ${
                  fatherNameerror.length > 0 || emptyError.length > 0
                    ? "invalid"
                    : "."
                } `}
                onChange={(e) => {
                  setFatherName(e.target.value);
                }}
                onFocus={() => {
                  setFatherNameLabel(true);
                }}
                onBlur={() => {
                  if (fatherName.length > 0) {
                    setFatherNameLabel(false);
                  } else {
                    setFatherNameLabel(true);
                  }
                }}
              />
              <label className={` ${fatherNameLabel === false ? "hide" : "."}`}>
                Father's Name
              </label>
              {fatherNameerror && (
                <div className="error">{fatherNameerror}</div>
              )}
            </div>

            <button className="button " onClick={handleFirst}>
              Next
            </button>
            {emptyError && <div className="error empty">{emptyError}</div>}
          </div>
        ) : second === true ? (
          <div className="second">
            <div className="user">
              <input
                type="email"
                className={`email ${
                  emailError.length > 0 || emptyError.length > 0
                    ? "invalid"
                    : "."
                } `}
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onFocus={() => {
                  setemailLable(true);
                }}
                onBlur={() => {
                  if (name.length > 0) {
                    setemailLable(false);
                  } else {
                    setemailLable(true);
                  }
                }}
              />
              <label className={` ${emailLable === false ? "hide" : "."}`}>
                Email
              </label>
              {emailError && <div className="error">{emailError}</div>}
            </div>
            <div className="user">
              <input
                type="text"
                className={`phone${
                  phoneNumberError.length > 0 || emptyError.length > 0
                    ? "invalid"
                    : "."
                } `}
                placeholder="Phone Number"
                value={phonenumber}
                onChange={(e) => {
                  setPhonenumber(e.target.value);
                }}
                onFocus={() => {
                  setphoneLable(true);
                }}
                onBlur={() => {
                  if (phonenumber.length > 0) {
                    setphoneLable(false);
                  } else {
                    setphoneLable(true);
                  }
                }}
              />
              <label className={` ${phoneLable === false ? "hide" : "."}`}>
                Phone Number
              </label>
              {phoneNumberError && (
                <div className="error">{phoneNumberError}</div>
              )}
            </div>
            <h3>Please Select Your D.O.B</h3>
            <DatePicker
              closeOnScroll={true}
              minDate={mindate}
              selected={startDate}
              maxDate={maxdate}
              onFocus={() => {
                setShow(true);
              }}
              className={`${daterror.length > 0 ? "invalid date" : ""}`}
              onBlur={() => {
                setShow(false);
              }}
              onChange={(date) => {
                setStartDate(date);
                setShow(false);
              }}
            />
            {daterror && <div className="error">{daterror}</div>}
            <button
              className="button second"
              style={{ opacity: `${show === true ? "0" : "1"}` }}
              onClick={handleSecond}
            >
              {" "}
              Next
            </button>
            {emptyError && <div className="error empty">{emptyError}</div>}
          </div>
        ) : third === true ? (
          <div className="third">
            {imageerror && <div className="error red ">{imageerror}</div>}
            <ImageUploading
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                <div className="upload__image-wrapper">
                  <button
                    className={`${
                      imageerror.length > 0 ? "invalid imgbox" : "."
                    } `}
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={() => {
                      onImageUpload();
                      setText("Click or Drag to Update image");
                    }}
                    {...dragProps}
                  >
                    {text}
                  </button>
                  &nbsp;
                  {imageList.map((image, index) => (
                    <div
                      key={index}
                      onChange={setnum(1)}
                      className="image-item"
                    >
                      <img src={image["data_url"]} alt="" width="100" />
                      <div className="image-item__btn-wrapper">
                        <button
                          onClick={() => {
                            onImageRemove(index);
                            setnum(0);
                            setText("Click or Drag to add image");
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
            <select
              name="gender"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value="select gender">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {genderError && <div className="error red "> {genderError}</div>}

            <a href="#" onClick={handleSubmit}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </div>
        ) : showdata === true ? (
          <div>
            <div id="gradient"></div>
            <div id="card">
              <img src={`${Data[0].image}`} alt="s" />
              <h2>
                {" "}
                {Data[0].name} <span> {Data[0].lastname}</span>
              </h2>
              <p>Student of IT in Czech republic.</p>
              <p>
                <h6 style={{ marginTop: "50px" }}>
                  Father Name: {Data[0].fatherName}
                </h6>
                <h6>DOB: {Data[0].DOB.toLocaleDateString()}</h6>
                <h6>Gender: {Data[0].gender}</h6>
              </p>

              <span class="left bottom">tel: {Data[0].phonenumber}</span>
              <span class="right bottom">email: {Data[0].email}</span>
            </div>
          </div>
        ) : null}
      </div>
    </Container>
  );
}
const Container = styled.div`
  h3 {
    color: white;
  }
  p {
    text-align: start;
  }
  .about {
    position: absolute;
    top: 0;
    opacity: 0.4;
    font-size: 100px !important;
    margin: 0px;
    top: 30%;
    left: 35%;
  }
  h2 {
    text-decoration: underline;
    text-transform: capitalize;
  }
  h6 {
    font-size: 14px !important;
  }
  .formShow {
    width: auto !important;
    background: none !important;
    padding: 0 !important;
    left: 46% !important;
  }

  .red {
    color: red !important;
  }
  .imgbox {
    background: white !important;
  }
  .empty {
    margin-top: 22px;
  }
  .date {
    background: black !important;
    border: 2px solid white !important;
    border-bottom: 2px solid white !important;
  }
  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    .first,
    .second,
    .third {
      display: flex;
      flex-direction: column;
    }
  }

  .user {
    position: relative;
    input {
      width: 100%;
      padding: 10px 0;
      font-size: 16px;
      color: #fff;
      margin-bottom: 30px;
      border: none;
      border-bottom: 1px solid #fff;
      outline: none;
      background: transparent;
    }
    label {
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px 0;
      font-size: 16px;
      color: #fff;
      pointer-events: none;
      transition: 0.5s;
    }
    input:focus ~ label {
      top: -25px;
      left: 0;
      color: #03e9f4;
      font-size: 12px;
    }
  }

  .invalid {
    animation: justshake 0.3s forwards;
    color: red !important;
    border-bottom: 1px solid red !important;
  }

  @keyframes justshake {
    25% {
      transform: translateX(5px);
    }

    50% {
      transform: translateX(-5px);
    }

    75% {
      transform: translateX(5px);
    }

    100% {
      transform: translateX-(5px);
    }
  }
  button {
    background: black;
    color: white;
    cursor: pointer;
    padding: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 4px;

    margin-bottom: 10px;
  }
  a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #03e9f4;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 40px;
    letter-spacing: 4px;
  }

  a:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
  }

  a span {
    position: absolute;
    display: block;
  }

  a span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: btn-anim1 1s linear infinite;
  }

  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }

  a span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: btn-anim2 1s linear infinite;
    animation-delay: 0.25s;
  }

  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }

  a span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: btn-anim3 1s linear infinite;
    animation-delay: 0.5s;
  }

  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }

  a span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: btn-anim4 1s linear infinite;
    animation-delay: 0.75s;
  }

  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }
  .button {
    width: 100px;
    padding: 15px 20px;
    font-size: 16px;
    background: transparent;
    border: none;
    position: relative;
    color: #f0f0f0;
    z-index: 1;
  }

  .button::after,
  .button::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -99999;
    transition: all 0.4s;
  }

  .button::before {
    transform: translate(0%, 0%);
    width: 100%;
    height: 100%;
    background: #28282d;
    border-radius: 10px;
  }

  .button::after {
    transform: translate(10px, 10px);
    width: 35px;
    height: 35px;
    background: #ffffff15;
    backdrop-filter: blur(5px);
    border-radius: 50px;
  }

  .button:hover::before {
    transform: translate(5%, 20%);
    width: 110%;
    height: 110%;
  }

  .button:hover::after {
    border-radius: 10px;
    transform: translate(0, 0);
    width: 100%;
    height: 100%;
  }

  .button:active::after {
    transition: 0s;
    transform: translate(0, 5%);
  }
  .second {
    margin-top: 40px;
  }
  select {
    background: #edf2f5;
    border: 0;
    width: 100%;
    display: block;
    padding: 16px 15px;
    color: #000000;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.03em;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    cursor: pointer;
  }
  option {
    transform: scale(0.85) translateY(-5px);
    -webkit-transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25),
      opacity 0.15s ease-out;
    transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;
  }
  .image-item__btn-wrapper {
    display: flex;
    justify-content: space-evenly;
    button {
      margin: 20px;
    }
  }
  .hide {
    opacity: 0;
  }
  .error {
    color: white;
    margin-bottom: 20px;
  }
  body {
    margin: 0 auto;
    padding: 0;
    background: #222;
  }

  .left {
    font-size: 14px;
    bottom: 55px;
  }

  .right {
    font-size: 14px;
    bottom: 20px;
  }

  .center {
    text-align: center;
  }

  .bottom {
    right: 20px;
    position: absolute;
  }

  #gradient {
    background: #999955;
    background-image: linear-gradient(
      #dab046 20%,
      #d73b25 20%,
      #d73b25 40%,
      #c71b25 40%,
      #c71b25 60%,
      #961a39 60%,
      #961a39 80%,
      #601035 80%
    );
    margin: 0 auto;
    margin-top: 120px;
    width: 100vw;
    height: 150px;
  }

  #gradient:after {
    content: "";
    position: absolute;
    background: #e9e2d0;
    left: 50%;
    margin-top: -67.5px;
    margin-left: -270px;
    padding-left: 20px;
    border-radius: 5px;
    width: 520px;
    height: 295px;
    z-index: -1;
  }

  #card {
    position: absolute;
    width: 450px;
    height: 225px;
    padding: 25px;
    padding-bottom: 15px;
    left: 50%;
    top: 67.5px;
    margin-left: -250px;
    background: #e9e2d0;
    box-shadow: -20px 0 35px -25px black, 20px 0 35px -25px black;
    z-index: 5;
  }

  #card img {
    width: 150px;
    float: left;
    border-radius: 5px;
    margin-right: 20px;
    -webkit-filter: sepia(1);
    -moz-filter: sepia(1);
    filter: sepia(1);
  }

  #card h2 {
    font-family: courier;
    color: #333;
    margin: 0 auto;
    padding: 0;
    font-size: 15pt;
  }

  #card p {
    font-family: courier;
    color: #555;
    font-size: 13px;
  }

  #card span {
    font-family: courier;
  }
`;
