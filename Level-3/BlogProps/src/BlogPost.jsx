import React from "react"

export default function BlogPost({title, subTitle, author, date}) {
    return (
        <div className="card">
        <div>
        <h1 className="title">{title}</h1>
        </div>
        <div>
        <p className="subtitle">{subTitle}</p>
        </div>
        <div>
        <p className="author">{author}</p>
        </div>
        <div>
        <p className="date">{date}</p>
        </div> 
        </div>
    )
}
