let newsList = []
let moreNewsList = []
const apiKey = "5c190d4725c64a88adea3e08c5e21ba3"
let page = 1

// load news 
// function emptyPage(){
//     document.getElementById("newsArea").innerHTML = "";

// }
const loadNews = async(pageSize) =>{

    let url = `https://newsapi.org/v2/everything?q=cannabis&pageSize=${pageSize}&apiKey=${apiKey}`
    let data = await fetch(url)
    let result = await data.json();
    newsList = (result.articles)
    
    render (newsList)
    console.log("what we get here?", result);
}

const render = (list) =>{
    console.log("hiiiiiiii", list)
    let newsListNumber = newsList.length
    let newshtml = list.map(item => `<div class="post_list post_list_style_" id="newsArea">
    <div id="news">
        <div class="row section_margin"></div>
            <div class="col-6">
                <div id="imgArea">
                 <img src="${item.urlToImage}" width=300/>

             </div>
        </div>
            <div class="col-md-8">
                <div id="contentArea">
                  <div class="row section_margin">
                     <h3 class="title" id="title">${item.title}</a></h3>
                 <div class="post_meta">
                    <div id="description">${item.description}</div>

                    <span class="meta_author_name" id="source"><a href="page-author.html" class="author">${item.source.name}</a></span>
                    <span class="meta_date" id="publishedAt">${moment(item.publishedAt).fromNow()}</span>

            </div>
              

           

     </div>
       
                                       
     
    
         

        </div>
        
       

    </div>
    
</div>`).join("")
document.getElementById("newsArea").innerHTML = newshtml
document.getElementById("articlesnumber").innerHTML = newsListNumber

}

//how many hours/ days ago
// document.write(moment("20170703 00:00:00", "YYYYMMDD hh:mm:ss").fromNow());
loadNews(20)

// load more news

const loadMoreNews = async(newList) =>{
    let urlMore = `https://newsapi.org/v2/everything?q=cannabis&page=${page}&apiKey=${apiKey}`
    console.log(urlMore)
    let dataMore = await fetch(urlMore)
    let resultMore = await dataMore.json();
    moreNewsList = resultMore.articles
    console.log("more news pls", moreNewsList)
    render (moreNewsList)
}

const renderMoreNews = (list) =>{
    let newsMore = list.map(item => `<div id="morenewsArea">
    <div id="news">
        <div id="contentArea">
            <div id="title">
            ${item.title}
            </div>
            <div id="source"${item.source.name}</div>
            <div id="publishedAt">${moment(item.publishedAt).fromNow()}</div>

        </div>

        <div id="imgArea">
            <img src="${item.urlToImage}" width=300/>

        </div>
    </div>
</div>`).join("")
document.getElementById("morenewsArea").innerHTML = newsMore

}
 

function readMore(){
    loadNews(40)
    console.log("aAAAAAAAAA DI VW")
}


function next(){
    console.log("click")
    page++
    loadMoreNews()
}



