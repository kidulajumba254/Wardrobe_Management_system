<template>
  <div class="landing-page">
    <!-- Header -->
    <header class="header">
      <h1 class="title">Welcome to Your Wardrobe Management System</h1>
      <p class="subtitle">Organize, Manage, and Style Your Wardrobe with Ease</p>

      <!-- Navigation Links -->
      <nav class="navigation">
        <router-link to="/login" class="nav-link">Login</router-link>
        <router-link to="/register" class="nav-link">Register</router-link>
        <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <div class="features">
        <div class="feature">
          <h2>Add Clothing Items</h2>
          <p>Easily add new clothing items to your wardrobe with details like category, color, and season.</p>
        </div>
        <div class="feature">
          <h2>Categorize and Filter</h2>
          <p>Organize your wardrobe by categories like tops, bottoms, and shoes. Filter items for quick access.</p>
        </div>
        <div class="feature">
          <h2>Search and Edit</h2>
          <p>Quickly search for items and update their details whenever needed.</p>
        </div>
      </div>

      <!-- Call-to-Action Button -->
      <button class="cta-button" @click="getStarted">Get Started</button>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <p>© 2025 Wardrobe Management System. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const getStarted = () => {
  router.push("/dashboard"); // Navigate to the dashboard
};
</script>

<style scoped>
/* General Styles */
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
  color: #333;
  text-align: center;
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

/* Navigation Styles */
.navigation {
  margin-top: 1.5rem;
}

.nav-link {
  margin: 0 1rem;
  text-decoration: none;
  color: #42b983;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #3aa876;
}

/* Main Content Styles */
.main-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.features {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
}

.feature {
  flex: 1;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.feature h2 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.feature p {
  font-size: 1rem;
  color: #7f8c8d;
}

/* Call-to-Action Button */
.cta-button {
  background-color: #42b983;
  color: #fff;
  font-size: 1.2rem;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #3aa876;
}

/* Footer Styles */
.footer {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #7f8c8d;
}
</style>