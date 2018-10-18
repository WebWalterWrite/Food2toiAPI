import React, { Component } from 'react';


const selectData = (WrappedComponent, action) => {

    class findRecipe extends Component{

        state= {
            data: [],
        }

    async componentDidMount(){
        
        let RecipesList = await action();
		this.fillData(RecipesList);
    }

    async componentDidUpdate(prevState){
       if(prevState.data !== this.state.data)
       let RecipesList = await action();
		this.fillData(RecipesList);
    }

    fillData(result){

        this.setState({
            data: result
        })
    }

    render(){

        return <WrappedComponent  content={this.state.data}/>
    }
}
    return findRecipe;

};

export default selectData;