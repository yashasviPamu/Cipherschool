import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'
function AboutPage(props){
    return(
        <div>
            <Hero title={props.title}/>
            <Content> 
                <p>Hello, my name is Yashasvi. I'm a android app developer, currently working on Java, <br/>SQLite database, firebase and React.</p>
                <br/>
                <p>My dream is to create my own firm which not only creates android applications but<br/> also full fledged websites.</p>
                <br/>
                <p>I'm constantly learning new technologies, those that help me reduce the friction in<br/> achieving my dream.</p>
                <br/>
                <p>My latest project that I have worked on is a Budget Management System(BMS), an<br/> android app to keep a tab on expenses created using SQLite databse. You can check<br/> it <a href="https://github.com/yashasviPamu/BudgetManagementSystem" target="_blank" rel="noopener noreferrer">here.</a></p>
                <br/>
                <p>You can check my resume <a href='https://github.com/yashasviPamu/Resume/blob/master/resume_july2020.pdf' target="_blank" rel="noopener noreferrer">here.</a></p>
            </Content>
        </div>

    );

}

export default AboutPage;