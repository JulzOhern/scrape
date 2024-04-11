export const content = `
    <h3>Home</h3>
    <div>fetch("https://scrape-dp53.onrender.com/readm/home")</div> 
    <br />
     <h3>Popular manga</h3>
    <div>fetch("https://scrape-dp53.onrender.com/readm/popular-manga")</div> 
    <br />
     <h3>Latest updates</h3>
    <div>fetch("https://scrape-dp53.onrender.com/readm/latest-updates")</div> 
    <br />
     <h3>New manga</h3>
    <div>fetch("https://scrape-dp53.onrender.com/readm/new-manga")</div> 
    <br />
     <h3>Category list</h3>
    <div>fetch("https://scrape-dp53.onrender.com/readm/category-list")</div> 
    <br />
     <h3>Search</h3>
    <div>fetch("https://scrape-dp53.onrender.com/readm/search")</div> 

    query-params: keyword
    <br />
     <h3>Category</h3>
    <div>fetch("https://scrape-dp53.onrender.com/readm/category/:id")</div> 

    id: action, adventure, comedy, etc...
    <br />
    <h3>Info</h3>
    <div>fetch("https://scrape-dp53.onrender.com/readm/info/:id")</div> 

    id: solo-leveling-30082023
    <br />
    <h3>Chapters</h3>
    <div>fetch("https://scrape-dp53.onrender.com/readm/chapters/:id")</div> 

    id: solo-leveling-30082023
    <br />
    <h3>Image</h3>
    <div>fetch("https://scrape-dp53.onrender.com/readm/image/:id/:chapter")</div> 

    id: solo-leveling-30082023
    chapter: 200
    <br />
`;
