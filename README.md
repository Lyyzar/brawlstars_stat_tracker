# Brawlstars Stats Tracker

### Description
This project is a **React** and **TypeScript**-based web application that allows **Brawl Stars** players to query their in-game statistics using the **Brawl Stars API**. Players can input their **gamertag** to retrieve detailed information about their profile, brawler stats, and use an upgrade calculator to estimate the cost of upgrading brawlers to a desired level.

---

### Features
- **Gamertag Search**: Players can input their gamertag to fetch their profile and stats.
- **Profile Overview**: Displays a player's overall trophies, rank, and other relevant profile information.
- **Brawler Stats**: Detailed stats for each brawler, such as power level, win rate, and usage.
- **Upgrade Calculator**: A tool that helps players estimate the cost of upgrading a brawler to a higher level. **Still in progress**

---

### Technologies Used
- **React**: For building the user interface and managing component-based architecture.
- **TypeScript**: To ensure type safety and scalability in the code.
- **JavaScript**: For handling certain dynamic features.
- **Brawl Stars API**: Fetches real-time data from the official game.
- **Backend**: Handles backend logic (API requests and data processing).

---

### Installation & Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/brawlstars-stats-query.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd brawlstars-stat-tracker
    cd frontend
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Set up your Brawl Stars API key**:
    - Sign up at the [Brawl Stars Developer Portal](https://developer.brawlstars.com/) to get an API key.
    - Create an `.env` file in the project root and add your API key:
      ```bash
      REACT_APP_API_KEY=your_brawl_stars_api_key
      ```

5. **Run the application**:
    ```bash
    npm start
    ```

6. **Access the app**: Open your browser and navigate to `http://localhost:3000`.

---

### Usage

1. **Enter your Gamertag**: Type your Brawl Stars gamertag into the input field.
2. **View Profile Stats**: Upon submission, view detailed stats about your profile, trophies, and ranking.
3. **Explore Brawler Stats**: Scroll through detailed statistics for each of your brawlers, such as power level, win rate, and usage.
4. **Upgrade Calculator**: Use the calculator to estimate how much it will cost to upgrade a brawler to a higher level.

---

### API Documentation
The project integrates the official [Brawl Stars API](https://developer.brawlstars.com/) to access real-time player data. To use this API, you must sign up at the [Brawl Stars Developer Portal](https://developer.brawlstars.com/) to request access.

---

### Future Enhancements
- **Battle Logs**: Add functionality to display recent battles for a player.
- **Advanced Filters**: Allow users to filter brawlers by power level, win rate, or other stats.
- **Localization**: Support multiple languages.

---

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Contact
For any questions, suggestions, or support, feel free to contact:

- **Email**: baloghkristof1000@gmail.com
- **GitHub**: [Your GitHub Profile](https://github.com/Lyyzar)
