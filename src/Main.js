import React from 'react';

function Main() {
    return (
        <>
         <main>
            <section id="section1">
                <h1>Trending Posts</h1>
                <p class="filters"><i class="fas fa-filter"></i>
            Filter by Category</p>
                <div class="filters-container">
                <div class="filters-item filter-active">All</div>
                <div class="filters-item">Artificial Intelligence</div>
                <div class="filters-item">Cloud Computing</div>
                <div class="filters-item">DevOps</div>
                <div class="filters-item">Programing Languages</div>
                <div class="filters-item">Mobile Application Development</div>
                <div class="filters-item">Technology and Tools</div>
                <div class="filters-item">Get a Job in a Tech Company</div>
                <div class="filters-item">Others</div>
                </div>
            </section>
            <section id="card-container" >
                <article>
                <div class="card-image">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png" alt=""/>
                </div>
                <div class="text-section">
                    <p class="card-title">Introduction To A Machine Learning...</p>
                    <p class="card-author-container"><span class="author">EdYoda</span> |<span class="date">  23 Aug 2019</span></p>
                    <p class="card-content">We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this...</p>
                </div>
                </article>
                <article>
                <div class="card-image">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png" alt=""/>
                </div>
                <div class="text-section">
                    <p class="card-title">LAMP Stack Vs MEAN stack: Choosing the</p>
                    <p class="card-author-container"><span class="author">EdYoda</span> |<span class="date">  24 Aug 2019</span></p>
                    <p class="card-content">In today’s dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement...</p>
                </div>
                </article>
                <article>
                <div class="card-image">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png" alt=""/>
                </div>
                <div class="text-section">
                    <p class="card-title">Impact of Cloud Computing in various...</p>
                    <p class="card-author-container"><span class="author">EdYoda</span> |<span class="date">  24 Aug 2019</span></p>
                    <p class="card-content">Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using...</p>
                </div>
                </article>
                <article>
                <div class="card-image">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png" alt=""/>
                </div>
                <div class="text-section">
                    <p class="card-title">Challenges of Machine Learning in Big Data...</p>
                    <p class="card-author-container"><span class="author">EdYoda</span> |<span class="date">  24 Aug 2019</span></p>
                    <p class="card-content">Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform the...</p>
                </div>
                </article>
                <article>
                <div class="card-image">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/5.png" alt=""/>
                </div>
                <div class="text-section">
                    <p class="card-title">Breaking the Myths around Cybersecurity...</p>
                    <p class="card-author-container"><span class="author">EdYoda</span> |<span class="date">  26 Aug 2019</span></p>
                    <p class="card-content">Cybersecurity plays an integral role in the process of good business models. But even cybersecurity programs built with good intentions can fall...</p>
                </div>
                </article>
                <article>
                <div class="card-image">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/7.png" alt=""/>
                </div>
                <div class="text-section">
                    <p class="card-title">Importance of Data Backup and Recovery i...</p>
                    <p class="card-author-container"><span class="author">EdYoda</span> |<span class="date">  26 Aug 2019</span></p>
                    <p class="card-content">A business must always introspect the areas where they lack in order to bring about a positive change in the work environment. One of the main...</p>
                </div>
                </article>
                <article>
                <div class="card-image">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png" alt=""/>
                </div>
                <div class="text-section">
                    <p class="card-title">What is Web Scraping?</p>
                    <p class="card-author-container"><span class="author">Zac Clancy</span> |<span class="date">  25 Sep 2019</span></p>
                    <p class="card-content">Simply put, web scraping is one of the tools developers use to gather and analyze information from the Internet. Some websites and platforms offer application...</p>
                </div>
                </article>
                <article>
                <div class="card-image">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png" alt=""/>
                </div>
                <div class="text-section">
                    <p class="card-title">What is Income Share Agreement?</p>
                    <p class="card-author-container"><span class="author">EdYoda</span> |<span class="date">  14 Oct 2019</span></p>
                    <p class="card-content">The term Income Share Agreement has been around for a long time since 1955 to be precise. Surprised, eh? It was first introduced by Milton Friedman...</p>
                </div>
                </article>
                <article>
                <div class="card-image">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png" alt=""/>
                </div>
                <div class="text-section">
                    <p class="card-title">Practical Machine Learning with Python...</p>
                    <p class="card-author-container"><span class="author">Daniel Pyrathon</span> | <span class="date">  16 Oct 2019</span></p>
                    <p class="card-content">Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to “learn” (e.g., progressively...</p>
                </div>
                </article>
                
            </section>
        </main>   
        </>
    );
}

export default Main;