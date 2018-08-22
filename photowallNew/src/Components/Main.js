import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto'
import {Route, Link} from 'react-router-dom'
import {removePost} from  '../redux/actions'





class Main extends Component {

  constructor(){
    super()
  }



  render(){

    console.log(this.props)



    return(
    
      <div>

          <h1>
              <Link to="/">PhotoWall</Link>
          </h1>

            <Route exact path="/" render ={()=>(
              <div>
              
                <PhotoWall {...this.props}/>

                {/* <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/> */}
              </div>
            )} />

            <Route exact path="/AddPhoto" render={({history}) =>(
               <div>
                  <AddPhoto {...this.props} onHistory={history}/>
                </div>

            )} />
       </div>
    )
  }
}


export default Main