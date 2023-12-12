import React from 'react'
import Data from './Data.json';
function Stays({ pin }) {
  return (

    <>
      <section>
        <h1>
        </h1>
        {
          Data.filter((itmes) => itmes.city.toLowerCase().includes(pin)).map((el, i) => (
            <div key={el.id}>
              <div className='card'>
                <div className='card-main'>
                  <div className='card-img'>
                    <img src={el.img_url} alt="" />
                  </div>
                  <div className='card-tex'>
                    <div className='card-text-hed'>
                      <div className='card-text-hed-tx'>
                        <h1>{el.title} <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></h1>
                        <span><a href="">Marmagao</a></span>
                        <span><a href="">Show on map</a></span>
                        <p><span>Limited-time Deal</span></p>
                      </div>

                      <div className='card-text-hed-but'>
                        <h4>Superb</h4>
                        <p>{el.reviews}</p>
                      </div>
                      <div className='card-text-hed-rat'>
                        <span><button>{el.rate}</button></span>
                      </div>
                    </div>

                    <div className='card-text-prd'>
                      <div className='card-text-prd-one'>
                        <h4>{el.city}</h4>
                        <p>Entire villa •1 bedroom •1 bathroom •1 kitchen •186m²</p>
                        <p>1 double bed</p>
                      </div>
                      <div className='card-text-prd-num'>
                        <p>1 night, 2 adults</p>
                        <p> <span>₹ 4,499</span>₹ 3,149 </p>
                        <p>+₹ 378 taxes and charges</p>

                        <div className='card-tex-but'>
                          <button> see availability <i class="fa fa-angle-right" aria-hidden="true"></i></button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          ))
        }

      </section>

    </>
  )
}

export default Stays
