                    <!--This is the Academics section-->
    <section class="academics-section">
  <h2>Academics section</h2>

  <div class="ac-card-container">
        <!--The first card-->
       <div class="ac-card">
           <div class="ac-card-header">
              <div class="ac-card-image">
               <img src="/Images/element5-digital-OyCl7Y4y0Bk-unsplash.jpg" alt="">
                </div>
                <h3>Lower primary</h3>
                <div class="ac-card-image">
                  <img src="/Images/pexels-cottonbro-6334763.jpg" alt="">

                </div>
            </div>
            <div class="ac-card-title">
                <h3>PP1 - Grade 3</h3>
            </div>
             <div class="ac-card-image">
                <img src="" alt="">
             </div>
               <div class="ac-card-footer">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">

               </div>
          




         </div>







  </div>







    </section>







    .academics-section{
    min-height: 100vh;
    padding: 60px 50px;
}
.academics-section h2{
    text-align: center;
    color: #0056D2;
    font-size: 30px;
}
.ac-card-container{
    display: grid;
    grid-template-columns: repeat(autofit, minmax(280px,1fr));
    gap: 1.5rem;
}

.ac-card{
    display: flex;
    flex-direction: column;
    border: 2px solid blue;
    
}
.ac-card-header{
    display: flex;
    gap:15px;
    align-items: center;
}
.ac-card-image{
    width:70px;
}
.ac-card-image img{
    width: 100%;
    object-fit: cover;
}
.ac-card-header h3{
    margin-left: 10px;
}
