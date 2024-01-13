import "./css/index.css";
import Data from "../assets/data.json";
import "./css/index.css";
import "./script.js";

function Card() {
  return (
    <>
      <div className="body">
        <div className="glide__container" id="wiz-glide">
          <ul className="glide__slides">
            {Data &&
              Data.map((data) => {
                return (
                  <li className="glide__slide"  id={`slide-${data.id}`} data-slide="5">
                    <div className="row align-items-center">
                      <h2><small>name:</small>{data.name}</h2>
                      <div className="video-conteneur col-8">
                        <iframe
                          className="map"
                          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3173.1235935124905!2d81.1470250753202!3d-37.31589997210463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDE4JzU3LjIiUyA4McKwMDgnNTguNiJF!5e0!3m2!1sru!2s!4v1705179489827!5m2!1sru!2s"
                          max-width="100"
                          frameborder="0"
                          height="100"
                        ></iframe>
                      </div>
                      <div className="col-4 card">
                       <p>Username:{data.username}</p>
                       <p>Email:{data.email}</p>
                       <p>Phone:+{data.phone}</p>
                       <p>City:{data.address.city}</p>
                       <p>Company:{data.company.name}</p>
                        <p>Website:<a href="#">{data.website}</a></p>

                      </div>
                    </div>
                  </li>
                
                );
              })}
                
          </ul>
        </div>

        <div className="glide__arrows" data-glide-el="controls">
          <a className="glide__arrow glide__arrow--prev" data-glide-dir="<">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </a>
          <a className="glide__arrow glide__arrow--next" data-glide-dir=">">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
