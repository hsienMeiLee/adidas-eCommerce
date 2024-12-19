import React, { useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { FiPlus } from "react-icons/fi";
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionData = [
    {
      title: '付款方式',
      content: (
        <ul style={{listStyleType:'disc'}} className='ml-3'>
          <li>
          信用卡即時線上一次刷卡付款<br />
          方便又好用的付款方式，當您選擇線上刷卡方式進行交易時，作業流程透過SSL加密機制，保障您的個人隱私資料。
          </li>
          <li>
           超商付款取貨<br />
          適合不方便在家收貨或者不方便使用ATM與無信用卡的消費者。
          </li>
          <li>
           LINE Pay <br />
          付款不需輸入信用卡資訊及3D驗證，僅需輸入專屬密碼即可使用信用卡進行付款，節省您的付款時間。
          </li>
          <li> 街口支付 <br />
          請先備妥您行動裝置中的街口支付應用程式，可使用街口儲值帳戶/銀行帳戶，並搭配街口幣進行付款。</li>
        </ul>
      ),
    },{
      title : '運送方式',
      content : (
        <ul>
          <li>
          若訂單商品符合以下條件，您可於配送方式選擇超商取貨服務，我們將會盡速將您的訂單運送至指定的超商門市，商品送達門市後我們將發送簡訊至您所留存的手機號碼進行通知。 <br />
          收到簡訊後，請於 7日內(含例假日)攜帶身分證正本(提貨者需為購買本人)至門市提領，若未能在7日內提領，商品將會以退貨處理，退貨憑證將由adidas代為處理。
          </li>
        </ul>
      ),
    },{
      title : '訂單進度',
      content : (
        <ul>
          <li>
            <b>是否訂購成功</b>
            <p>訂單成立後，系統會發送『訂單通知』電子郵件給您，記載您提交的訂單詳細資料，包括訂購明細和收件資訊。</p>
          </li>
          <li>
            <b>如何追蹤訂單進度</b>
            <p>有關商品的出貨進度，可在『我的帳戶訂單查詢』中查詢。</p>
          </li>
          <li>
            <b>如何取消訂單</b>
            <p>商品尚未出貨前，可於『我的帳戶訂單查詢』中，點選 <span className='text-red-700'>"取消訂單"</span> 按鈕</p>
          </li>
        </ul>
      ),
    },
  ];

  const {title, content} = accordionData;
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'關於'} text2={'我們'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="about_img" className='w-full md:max-w-[450px]' />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            adidas為一專注於設計、開發與行銷的國際知名運動品牌，致力研發專業鞋款、服飾及配件，並以成為世界級運動專業領導品牌為目標。 adidas running一直專注於研發創新科技以幫助跑者提升運動表現。革命性Boost ™科技，不僅改變了跑步產業，也鞏固了阿迪達斯在跑鞋商品中領導者的地位。如今，adidas已為全球跑者推出一系列頂尖的專業跑鞋，包含ADIZERO family、Supernova以及知名的Ultraboost，均以強勁的能量反饋為跑者帶來一流的跑步體驗。
          </p>
          <p>
            adidas Originals全系列以經典Trefoil logo三葉草標誌做為品牌識別，代表運動經典與全球街頭風格的交會融合。adidas Originals旨在不斷創新，通過當代年輕文化視角，融合源於運動場上的創造力與勇氣，積極鼓勵大膽探索，勇於發揮原創力。自1972年問世以來，三葉草持續引領當代街頭風潮，至今仍深受廣大消費者喜愛，adidas Originals將持續力求引領街頭運動時尚趨勢，並不斷探索新的領域為大眾帶來嶄新運動潮流視野。
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={'購物'} text2={'說明'} />
      </div>
      <div className="accordion">
        {accordionData.map((item, index) => (
          <div key={index} className="accordion-item">
            <div
              className="accordion-header cursor-pointer p-4 bg-gray-200 border-b"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center justify-between text-base w-full">
                <span>{item.title}</span>
                <span><FiPlus /></span>
              </div>
              
            </div>
            <div
              className={`accordion-content overflow-hidden transition-max-height duration-300 ease ${
                activeIndex === index ? 'max-h-screen p-4 bg-gray-100' : 'max-h-0'
              }`}
            >
              {activeIndex === index && <div>
                <div className="text-base">{item.content}</div>
              </div>}
            </div>
          </div>
        ))}
      
      
      
      </div>
      <div className="mt-5">
        <NewsLetterBox/>
      </div>
    </div>
  )
}

export default About