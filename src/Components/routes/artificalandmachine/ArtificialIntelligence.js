import React from 'react'
import { Link } from 'react-router-dom';


export default function ArtificialIntelligence() {
  return (
    <div>
        <h1 className='dev-h'>Artificial intelligence</h1>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rJ1Qao09CFI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
       
        <div>
        <h3>AN INTRODUCTION TO AI&ML 
</h3>
        <p className='p-mean'>Emerging technologies, such as Artificial Intelligence, the Internet of Things (IoT), Blockchain technology and Robotics, has
led to the fourth industrial revolution; encompassing multiple innovative new solutions, changing life as we know it on a
day to day basis. This paper explores Artificial Intelligence (AI) and its development in recent years, which has led to new
innovative solutions and opportunities. The risks pertaining to this technology, cyber included, will also be explored as well
as how this technology interacts with other emerging technologies.</p>
        </div>

        <div>
        <p className='mean1'>USES OF ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING:</p>
        <p className='p-mean'>People use AI and Machine Learning every day without realising it, whether it be talking to Siri, or simply browsing on Google
and your choices being remembered. Real-life applications per sector include:
• In Financial Services, AI and Machine Learning is used to speed up processes with a high accuracy of success. Some
 of its uses include: Credit granting, insurance underwriting, fraud prevention, claims administration, Robo-advisors,
 algorithmic trading, targeted marketing and sentiment analysis.
“American Express handles over 1 trillion dollars in transactions from more than 110 million of their credit cards each
 year. The company relies on Machine Learning to manage their data, discover spending trends and offer customers
 individualised offers. Additionally, Machine Learning is used by lending and credit card companies to manage and predict
 risk. These computer programs take into account a loan seeker’s past credit history, along with thousands of other data
 points like cell phone and rent payments, to deem the risk of the lending company. By taking other data points into
 account, lenders can offer loans to a much wider array of individuals who couldn’t get loans with traditional methods.
 Trading firms are using Machine Learning to amass a huge lake of data and determine the optimal price points to execute
 trades. These complex high-frequency trading algorithms take thousands, if not millions, of financial data points into
 account to buy and sell shares at the right moment.”10
• The healthcare industry uses this technology to manage medical data, discover treatments and detect diseases. Updated
 systems in medical facilities can now quickly pull through data to display pertinent information.11
• AI and Machine Learning is used in social media to suggest pages for users to follow based on similar likes and interest.
 Facebook and Twitter were prompted by the spread of ‘Fake News’ in 2016 to use this technology in their platforms.
 Cambridge Analytica used this technology to determine users’ preferences in the Trump Campaign and Brexit and could
 thereafter determine which users votes could be swayed.
• In retail, AI and Machine Learning is used to optimise sales as well as gather data on shoppers to customise preferences.</p>
        </div>

        <div>
            <Link to='/artificialquiz'> <button className='butds1'>Start Quiz</button></Link>
            <Link to='/artificialassigments'><button className='butds1'>Assignments</button></Link>
            </div>
        

</div>
  )
}

