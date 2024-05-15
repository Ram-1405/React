import React from 'react'

export default function Newsitems(props) {
  return (
    <div>
      <div>
            <div className="card" style={{width:'250px',height:'350px'}}>
                <img src={props.urlToImage} className="card-img-top" alt='' style={{width:'100%',height:'150px'}} />
                <div className="card-body" >
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.url} className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    </div>
  )
}
