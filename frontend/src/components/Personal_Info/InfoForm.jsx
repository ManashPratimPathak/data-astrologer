// import { set } from 'mongoose';
import React, {useState} from 'react'
import Header from '../Home/Header/Header'
import './InfoForm.css'
import { MdCloudUpload } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai'
// import ButtonsInfo from '../Shared/Buttons/ButtonsInfo'


const InfoForm = () => {
    const [isActive, setIsActive] = useState(false);
    const [image, setImage] = useState(null)
    const [fileName, setFileName]  =useState(null)
    // const [active, setActive] = useState(true);
    
    // const changeName = ()=>{
    //     setActive(false);
    // }
    


    const handleclick = () =>{
        setIsActive(current => !current);
    }
  return (

        <div>
            <div className="header">
                <Header className='header_info' title="Let's Dive Into the future"/>
            </div>
            <div className="form-section">

                <div className="button_div">
                    <button  className='infoButton personal' id="personalbtn">Personal</button>
                    <button  className='infoButton business' id="businessbtn">Business</button>

                </div>
                <form className="form" onClick={() => document.querySelectorAll(".uploadInput").click()}>
                    <div className="up">
                        
                        <div className="left">
                            <div>
                                <label htmlFor='Name / Company Name'>Name/Company Name</label>
                                <input style={{backgroundColor: isActive ? 'rgb(235 231 231)' : ''}} onClick={handleclick} type="text" className='textfield' name="Name" id="" />
                            </div>
                            <div>
                                <label htmlFor='Email'>E-mail</label>
                                <input style={{backgroundColor: isActive ? 'rgb(235 231 231)' : ''}} onClick={handleclick} type="email" className='textfield' name="email" id="" />
                            </div>
                            <div>
                                <label htmlFor='Contact Number'>Contact Number</label>
                                <input style={{backgroundColor: isActive ? 'rgb(235 231 231)' : ''}} onClick={handleclick} type="text" className='textfield' name="Name" id="" />
                            </div>
                            <div>
                                <label htmlFor='Address'>Address</label>
                                <input style={{backgroundColor: isActive ? 'rgb(235 231 231)' : ''}} onClick={handleclick} type="text" className='textfield address' name="Name" id="" />
                            </div>

                        </div>
                        <div className='right'>
                            <div>
                                <label htmlFor='TextField'>Describe what your data and your expectations from us:</label>
                                <input style={{backgroundColor: isActive ? 'rgb(235 231 231)' : ''}} onClick={handleclick} type="text" className='textfield bigtext' name="" id="" />

                            </div>
                        </div>
                    </div>
                    <div className="below">

                        <div className="down">
                            <div className="upload">
                                <input type="file" accept='image/*' className='uploadInput' hidden  onChange={({ target:{files}}) => {
                                    files[0] && setFileName(files[0].name)
                                    if(files){
                                        setImage(URL.createObjectURL(files[0]))
                                    }
                                }}/>
                                {image? <img src={image} width={60} height={60} alt={fileName} />:<>
                                <MdCloudUpload color='#000000' size={60}/>
                                <p>Upload here</p>
                                </>}
                            </div>
                            {/* <h3>hello</h3> */}
                            
                        </div>

                        <div className='checkbox'>
                            <input type="checkbox" name="tnc" id="" />
                            <label htmlFor="tnc">&nbsp;&nbsp;By checking this you accept our privacy policy.</label>
                        </div>
                        <button class="submitbtn infoButton">Submit</button>
                    </div>
                    
                    
                </form>
            </div>
        </div>
    
  )
}

export default InfoForm