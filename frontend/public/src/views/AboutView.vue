<template>
  <div class="about">
    <!-- Header -->
    <header class="header">
      <h1 class="title">About Wardrobe Management System</h1>
      <p class="subtitle">Simplifying Your Wardrobe Organization</p>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <section class="about-section">
        <h2>Our Mission</h2>
        <p>
          At Wardrobe Management System, our mission is to help you organize and manage your wardrobe effortlessly.
          Whether you're a fashion enthusiast or just looking to declutter, our app provides the tools you need to
          categorize, filter, and search your clothing items with ease.
        </p>
      </section>

      <section class="about-section">
        <h2>Features</h2>
        <ul class="features-list">
          <li>Add, edit, and delete clothing items.</li>
          <li>Categorize items by type (e.g., tops, bottoms, shoes).</li>
          <li>Filter and search your wardrobe quickly.</li>
          <li>User-friendly and responsive design.</li>
        </ul>
      </section>

      <section class="about-section">
        <h2>Meet the Team</h2>
        <div class="team-members">
          <div class="team-member">
            <h3>John Doe</h3>
            <p>Lead Developer</p>
          </div>
          <div class="team-member">
            <h3>Jane Smith</h3>
            <p>UI/UX Designer</p>
          </div>
          <div class="team-member">
            <h3>Alice Johnson</h3>
            <p>Product Manager</p>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <p>© 2025 Wardrobe Management System. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// You can add script logic here if needed
</script>

<style scoped>
/* General Styles */
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
  color: #333;
  text-align: center;
  padding: 2rem;
}

/* Header Styles */
.header {
  margin-bottom: 2rem;
}

.title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
}

/* Main Content Styles */
.main-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-section {
  margin-bottom: 2rem;
}

.about-section h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.about-section p {
  font-size: 1rem;
  color: #7f8c8d;
  line-height: 1.6;
}

.features-list {
  list-style-type: none;
  padding: 0;
  text-align: left;
}

.features-list li {
  background-color: #fff;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.team-members {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

.team-member {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
}

.team-member h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.team-member p {
  font-size: 1rem;
  color: #7f8c8d;
}

/* Footer Styles */
.footer {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #7f8c8d;
}
</style>