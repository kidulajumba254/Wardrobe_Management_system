<template>
  <div class="dashboard">
    <!-- Header -->
    <header class="header">
      <h1 class="title">Dashboard</h1>
      <p class="subtitle">Manage Your Wardrobe</p>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <section class="dashboard-section">
        <h2>Your Wardrobe Overview</h2>
        <p>Here’s a quick overview of your wardrobe:</p>
        <div class="stats">
          <div class="stat">
            <h3>Total Items</h3>
            <p>120</p>
          </div>
          <div class="stat">
            <h3>Categories</h3>
            <p>5</p>
          </div>
          <div class="stat">
            <h3>Most Worn</h3>
            <p>Blue Jeans</p>
          </div>
        </div>
      </section>

      <section class="dashboard-section">
        <h2>Quick Actions</h2>
        <div class="actions">
          <router-link to="/add-item" class="action-button">Add New Item</router-link>
          <router-link to="/categories" class="action-button">View Categories</router-link>
          <router-link to="/search" class="action-button">Search Items</router-link>
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
.dashboard {
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

.dashboard-section {
  margin-bottom: 2rem;
}

.dashboard-section h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.dashboard-section p {
  font-size: 1rem;
  color: #7f8c8d;
  line-height: 1.6;
}

.stats {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

.stat {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
}

.stat h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.stat p {
  font-size: 1rem;
  color: #7f8c8d;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.action-button {
  display: inline-block;
  background-color: #42b983;
  color: #fff;
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: #3aa876;
}

/* Footer Styles */
.footer {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #7f8c8d;
}
</style>