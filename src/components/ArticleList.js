import React from "react"
import Article from "./Article"

function ArticleList(props){
    return <main>
        {props.articles.map(articleProp => {
            return <Article key={articleProp.id} article={articleProp}/>
        })}
    </main>
}

export default ArticleList

