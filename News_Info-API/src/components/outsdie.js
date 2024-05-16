import Newsitems from './Newsitems'
import React, { Component } from 'react'
import newss from './news2.jpeg'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from './Loader'

export default class outsdie extends Component {
    constructor(){
        super();
        this.state={
            page:1,
            loading:true,
            articles:[]
        };
    }
    
    
    async componentDidMount(){
        await this.fetchData();
    }

    fetchData=async()=>{
      this.setState({loading:true})
      const urls=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&pageSize=8&page=${this.state.page}&apiKey=554c1ae1d9c04216b37e91dd92d39d72`;
      try{  
      let data=await fetch(urls);
        let parsedata=await data.json()
        this.setState(xyz=>({
          articles:[...xyz.articles,...parsedata.articles],
          loading:false,
          totalresult:parsedata.totalResults,
        }));
      }catch(error){
        alert("error"); 
      }
       
    }
    fetchNextPage = () => {
      this.setState(
          prevState => ({ page: prevState.page + 1 }),
          this.fetchData
      );
  };
 
  render() {
    return (
      <>
        <div className='my-5'> 
            <h1 style={{textAlign:'center',backgroundColor:'aliceblue',marginTop:'10px'}}>TOP HeadLines</h1>
            <InfiniteScroll
                              dataLength={this.state.articles.length} 
                              next={this.fetchNextPage}
                              hasMore={this.state.articles.length%8===0}
                              loader={<Loader/>}>
            <div  className="container my-5" style={{
                        display:'grid',
                        gridTemplateRows:'repeat(5,1fr)',
                        gridTemplateColumns:'repeat(4,1fr)',
                        gridGap:'5px',
                        height:'100%',
                        width:'100%',
                        }}>
                          
                {this.state.articles.map((element,index)=>(
                        <div className="inner" key={index}>
                            <Newsitems title={element.title?element.title.slice(0,30):""}
                            description={element.description?element.description.slice(0,50):""}
                            urlToImage={element.urlToImage?element.urlToImage:newss}
                            url={element.url} />
                        </div>     
            ))}
            </div>  
            </InfiniteScroll>
             
        </div>
        
      </>
    )
  }
}


