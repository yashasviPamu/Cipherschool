import React from 'react'
import BMS from '../assets/images/BMS.jpg'
import IDL from '../assets/images/IDL.jpg'
import Hockey from '../assets/images/Hockey.jpg'
import Card from '../components/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items: [
                {
                    id: 0,
                    title: 'Budget Management System',
                    subTitle: 'Android Application for BMS',
                    imgSrc: BMS,
                    link: 'https://github.com/yashasviPamu/BudgetManagementSystem',
                    Selected: false

                },
                {
                    id: 1,
                    title: 'Ideal House Locator',
                    subTitle: 'Capstone project of the course Data Science',
                    imgSrc: IDL,
                    link: 'https://github.com/yashasviPamu/IBM-DATA-SCIENCE-CAPSTONE-PROJECT',
                    Selection: false

                },
                {
                    id: 2,
                    title: 'Hockey Website',
                    subTitle: 'Static website on Hockey sport',
                    imgSrc: Hockey,
                    link: 'https://github.com/yashasviPamu/Hockey-website',
                    Selection: false
                }
            ]

        }
    }

    handleCardClick=(id,card)=>{
        let items=[...this.state.items];
        
        items[id].selected=items[id].selected ? false : true;
        
        items.forEach(item => {
            if(item.id !== id)
            {
                item.selected = false;
            }    
        });

        this.setState({
            items
        });
    }

    makeItems=(items)=>{
        return items.map(item=>{
            return <Card item={item} click={(e=>this.handleCardClick(item.id,e))} key={item.id} />
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;