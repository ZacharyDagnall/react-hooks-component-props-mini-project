import React from "react"

function Article(props){
    const article=props.article
    let emoji=""
    if(article.minutes < 30){
        for(let i=0;i<Math.ceil(article.minutes/5);i++){
            emoji+="☕️"
        }
    } else{
        for(let i=0;i<Math.ceil(article.minutes/10);i++){
            emoji+="🍱"
        }
    }
    emoji+=" min read"
    return <article>
        <h3>{article.title}</h3>
        <small>{article.date || "January 1, 1970"}</small>
        <p>{article.preview}</p>
        <small>{emoji}</small>
    </article>
}

export default Article
