<section class="testimonials-section">
    <div class="section-header">
        <span class="sub-title">TESTIMONIALS</span>
        <h1 class="main-title">Student reviews</h1>
    </div>

    <div class="testimonials-container">
        <!-- Testimonial Item 1 (Plain White Background) -->
        <div class="testimonial-item">
            <div class="avatar-box">
                <!-- Replace with your image link -->
                <img src="mike-perry.jpg" alt="Mike Perry">
            </div>
            <div class="content-box">
                <h3 class="reviewer-name">MIKE PERRY</h3>
                <p class="review-text">
                    "Learning here completely changed how I approach swimming. The instructors break down every stroke perfectly, making it easy to build water safety habits and master advanced breathing techniques."
                </p>
                <a href="#" class="read-more-btn">READ MORE</a>
            </div>
        </div>

        <!-- Testimonial Item 2 (Light Gray Background) -->
        <div class="testimonial-item highlight-bg">
            <div class="avatar-box">
                <!-- Replace with your image link -->
                <img src="linda-hudson.jpg" alt="Linda Hudson">
            </div>
            <div class="content-box">
                <h3 class="reviewer-name">LINDA HUDSON</h3>
                <p class="review-text">
                    "I was terrified of deep water before starting. Thanks to the patient guidance and structured lane rules, I gained the lifelong confidence I always wanted. Highly recommend to any student!"
                </p>
                <a href="#" class="read-more-btn">READ MORE</a>
            </div>
        </div>
    </div>
</section>



<section class="news-section">
    <div class="news-header">
        <span class="news-badge">UPDATES</span>
        <h2 class="news-section-title">Latest news & announcements</h2>
    </div>

    <div class="news-grid">
        <!-- News Card 1 -->
        <article class="news-card">
            <div class="news-image-wrapper">
                <img src="gala-tournament.jpg" alt="Swimmers on blocks ready to dive">
                <span class="category-tag">Events</span>
            </div>
            <div class="news-content">
                <div class="news-meta">
                    <span class="news-date">June 12, 2026</span>
                    <span class="meta-divider">•</span>
                    <span class="read-time">3 min read</span>
                </div>
                <h3 class="news-title">Annual summer swim gala tournament registration opens next week</h3>
                <p class="news-excerpt">Secure your lane! Registration kicks off this Monday for all age categories. Read the event guidelines, timing structures, and check the prize categories.</p>
                <a href="#" class="news-link">Read Full Story →</a>
            </div>
        </article>

        <!-- News Card 2 -->
        <article class="news-card">
            <div class="news-image-wrapper">
                <img src="pool-maintenance.jpg" alt="Clear blue water of an indoor pool">
                <span class="category-tag">Facility</span>
            </div>
            <div class="news-content">
                <div class="news-meta">
                    <span class="news-date">June 10, 2026</span>
                    <span class="meta-divider">•</span>
                    <span class="read-time">2 min read</span>
                </div>
                <h3 class="news-title">Holiday hours and routine pool maintenance schedule update</h3>
                <p class="news-excerpt">Our main Olympic-sized pool will undergo standard filter optimization. Review our adjusted lane availability timelines and alternative swimming schedules here.</p>
                <a href="#" class="news-link">Read Full Story →</a>
            </div>
        </article>

        <!-- News Card 3 -->
        <article class="news-card">
            <div class="news-image-wrapper">
                <img src="infant-swim.jpg" alt="Swim instructor helping a child float">
                <span class="category-tag">Classes</span>
            </div>
            <div class="news-content">
                <div class="news-meta">
                    <span class="news-date">June 05, 2026</span>
                    <span class="meta-divider">•</span>
                    <span class="read-time">4 min read</span>
                </div>
                <h3 class="news-title">Introducing morning infant water safety classes starting this month</h3>
                <p class="news-excerpt">Help your little ones build early comfort and essential floating skills. Our certified instructors introduce basic breathing play in a warm, welcoming environment.</p>
                <a href="#" class="news-link">Read Full Story →</a>
            </div>
        </article>
    </div>
</section>



<style>


/* Base Layout Set Up */
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #ffffff;
}

.testimonials-section {
    max-width: 1100px;
    margin: 60px auto;
    padding: 0 20px;
}

/* Header Text Alignments */
.section-header {
    text-align: center;
    margin-bottom: 50px;
}

.sub-title {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    color: #333333;
    display: block;
    margin-bottom: 8px;
}

.main-title {
    font-size: 48px;
    font-weight: normal;
    color: #111111;
    margin: 0;
}

/* Grid Layout for Row Alignments */
.testimonials-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.testimonial-item {
    display: flex;
    align-items: flex-start;
    padding: 40px 60px;
    gap: 40px;
    background-color: #ffffff;
}

/* Light gray shading for every second review card */
.testimonial-item.highlight-bg {
    background-color: #f2f2f2;
}

/* Round Profile Image Formatting */
.avatar-box img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
}

/* Content Text Formats */
.content-box {
    max-width: 650px;
}

.reviewer-name {
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 0 15px 0;
    color: #111111;
}

.review-text {
    font-size: 15px;
    line-height: 1.6;
    color: #444444;
    margin: 0 0 20px 0;
}

/* Underlined Read More CTA Buttons */
.read-more-btn {
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #111111;
    text-decoration: none;
    border-bottom: 1.5px solid #111111;
    padding-bottom: 3px;
    display: inline-block;
    transition: opacity 0.2s ease;
}

.read-more-btn:hover {
    opacity: 0.7;
}

/* Tablet and Smartphone Screen Fixes */
@media (max-width: 768px) {
    .testimonial-item {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 30px 20px;
        gap: 20px;
    }
    .main-title {
        font-size: 36px;
    }
}















/* Base container layout */
.news-section {
    max-width: 1200px;
    margin: 80px auto;
    padding: 0 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

/* Header design */
.news-header {
    text-align: center;
    margin-bottom: 50px;
}

.news-badge {
    background-color: #e6f0fa;
    color: #0056b3;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding: 6px 14px;
    border-radius: 20px;
    display: inline-block;
    margin-bottom: 12px;
}

.news-section-title {
    font-size: 36px;
    color: #1a1a1a;
    margin: 0;
    font-weight: 800;
}

/* Three-column horizontal news grid layout */
.news-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

/* Card components */
.news-card {
    background: #ffffff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    border: 1px solid #eaeaea;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
}

.news-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

/* Image framing inside cards */
.news-image-wrapper {
    position: relative;
    width: 100%;
    height: 220px;
    overflow: hidden;
}

.news-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.category-tag {
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: rgba(255, 255, 255, 0.95);
    color: #1a1a1a;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Content layout inner blocks */
.news-content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.news-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: #757575;
    margin-bottom: 12px;
}

.meta-divider {
    color: #cccccc;
}

.news-title {
    font-size: 19px;
    color: #1a1a1a;
    line-height: 1.4;
    margin: 0 0 12px 0;
    font-weight: 700;
}

.news-excerpt {
    font-size: 14px;
    color: #555555;
    line-height: 1.6;
    margin: 0 0 20px 0;
    flex-grow: 1;
}

/* Action link animations */
.news-link {
    color: #0056b3;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    transition: color 0.2s ease;
    align-self: flex-start;
}

.news-link:hover {
    color: #003d82;
}

/* Mobile responsive breakpoints */
@media (max-width: 992px) {
    .news-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 650px) {
    .news-grid {
        grid-template-columns: 1fr;
    }
    .news-section-title {
        font-size: 28px;
    }
}





    </style>