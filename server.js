const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

/* 🔥 WORKFORCE DATA */
const workforceData = {
  "Rahul Sharma": {
    "IT": {
      "Week": [
        { day: "Monday", shift: "Morning", time: "9:00 AM - 5:00 PM" },
        { day: "Tuesday", shift: "Morning", time: "9:00 AM - 5:00 PM" },
        { day: "Wednesday", shift: "Evening", time: "2:00 PM - 10:00 PM" },
        { day: "Thursday", shift: "Morning", time: "9:00 AM - 5:00 PM" },
        { day: "Friday", shift: "Night", time: "10:00 PM - 6:00 AM" }
      ]
    }
  },

  "Ankit Verma": {
    "HR": {
      "Week": [
        { day: "Monday", shift: "Day", time: "10:00 AM - 6:00 PM" },
        { day: "Tuesday", shift: "Day", time: "10:00 AM - 6:00 PM" },
        { day: "Wednesday", shift: "Day", time: "10:00 AM - 6:00 PM" },
        { day: "Thursday", shift: "Evening", time: "2:00 PM - 10:00 PM" },
        { day: "Friday", shift: "Day", time: "10:00 AM - 6:00 PM" }
      ]
    }
  },

  "Priya Singh": {
    "Finance": {
      "Week": [
        { day: "Monday", shift: "Morning", time: "8:00 AM - 4:00 PM" },
        { day: "Tuesday", shift: "Morning", time: "8:00 AM - 4:00 PM" },
        { day: "Wednesday", shift: "Morning", time: "8:00 AM - 4:00 PM" },
        { day: "Thursday", shift: "Morning", time: "8:00 AM - 4:00 PM" },
        { day: "Friday", shift: "Morning", time: "8:00 AM - 4:00 PM" }
      ]
    }
  },

  "Arjun Mehta": {
  "IT": {
    "Week": [
      { day: "Monday", shift: "Morning", time: "9:00 AM - 5:00 PM" },
      { day: "Tuesday", shift: "Evening", time: "2:00 PM - 10:00 PM" },
      { day: "Wednesday", shift: "Morning", time: "9:00 AM - 5:00 PM" },
      { day: "Thursday", shift: "Night", time: "10:00 PM - 6:00 AM" },
      { day: "Friday", shift: "Morning", time: "9:00 AM - 5:00 PM" }
    ]
  }
},

"Neha Kapoor": {
  "HR": {
    "Week": [
      { day: "Monday", shift: "Day", time: "10:00 AM - 6:00 PM" },
      { day: "Tuesday", shift: "Day", time: "10:00 AM - 6:00 PM" },
      { day: "Wednesday", shift: "Evening", time: "2:00 PM - 10:00 PM" },
      { day: "Thursday", shift: "Day", time: "10:00 AM - 6:00 PM" },
      { day: "Friday", shift: "Day", time: "10:00 AM - 6:00 PM" }
    ]
  }
},

"Rohit Das": {
  "Production": {
    "Week": [
      { day: "Monday", shift: "Night", time: "10:00 PM - 6:00 AM" },
      { day: "Tuesday", shift: "Night", time: "10:00 PM - 6:00 AM" },
      { day: "Wednesday", shift: "Evening", time: "2:00 PM - 10:00 PM" },
      { day: "Thursday", shift: "Night", time: "10:00 PM - 6:00 AM" },
      { day: "Friday", shift: "Evening", time: "2:00 PM - 10:00 PM" }
    ]
  }
},

"Sneha Iyer": {
  "Finance": {
    "Week": [
      { day: "Monday", shift: "Morning", time: "8:00 AM - 4:00 PM" },
      { day: "Tuesday", shift: "Morning", time: "8:00 AM - 4:00 PM" },
      { day: "Wednesday", shift: "Day", time: "10:00 AM - 6:00 PM" },
      { day: "Thursday", shift: "Morning", time: "8:00 AM - 4:00 PM" },
      { day: "Friday", shift: "Day", time: "10:00 AM - 6:00 PM" }
    ]
  }
},

"Vikram Singh": {
  "Logistics": {
    "Week": [
      { day: "Monday", shift: "Evening", time: "2:00 PM - 10:00 PM" },
      { day: "Tuesday", shift: "Evening", time: "2:00 PM - 10:00 PM" },
      { day: "Wednesday", shift: "Night", time: "10:00 PM - 6:00 AM" },
      { day: "Thursday", shift: "Evening", time: "2:00 PM - 10:00 PM" },
      { day: "Friday", shift: "Morning", time: "9:00 AM - 5:00 PM" }
    ]
  }
},

"Pooja Nair": {
  "Marketing": {
    "Week": [
      { day: "Monday", shift: "Day", time: "10:00 AM - 6:00 PM" },
      { day: "Tuesday", shift: "Morning", time: "9:00 AM - 5:00 PM" },
      { day: "Wednesday", shift: "Day", time: "10:00 AM - 6:00 PM" },
      { day: "Thursday", shift: "Evening", time: "2:00 PM - 10:00 PM" },
      { day: "Friday", shift: "Day", time: "10:00 AM - 6:00 PM" }
    ]
  }
},

"Karan Malhotra": {
  "Operations": {
    "Week": [
      { day: "Monday", shift: "Morning", time: "9:00 AM - 5:00 PM" },
      { day: "Tuesday", shift: "Night", time: "10:00 PM - 6:00 AM" },
      { day: "Wednesday", shift: "Morning", time: "9:00 AM - 5:00 PM" },
      { day: "Thursday", shift: "Evening", time: "2:00 PM - 10:00 PM" },
      { day: "Friday", shift: "Morning", time: "9:00 AM - 5:00 PM" }
    ]
  }
},

"Meera Joshi": {
  "Admin": {
    "Week": [
      { day: "Monday", shift: "Day", time: "10:00 AM - 6:00 PM" },
      { day: "Tuesday", shift: "Day", time: "10:00 AM - 6:00 PM" },
      { day: "Wednesday", shift: "Day", time: "10:00 AM - 6:00 PM" },
      { day: "Thursday", shift: "Morning", time: "9:00 AM - 5:00 PM" },
      { day: "Friday", shift: "Day", time: "10:00 AM - 6:00 PM" }
    ]
  }
},

"Aditya Roy": {
  "IT": {
    "Week": [
      { day: "Monday", shift: "Evening", time: "2:00 PM - 10:00 PM" },
      { day: "Tuesday", shift: "Morning", time: "9:00 AM - 5:00 PM" },
      { day: "Wednesday", shift: "Evening", time: "2:00 PM - 10:00 PM" },
      { day: "Thursday", shift: "Night", time: "10:00 PM - 6:00 AM" },
      { day: "Friday", shift: "Morning", time: "9:00 AM - 5:00 PM" }
    ]
  }
},

"Ritika Sharma": {
  "Support": {
    "Week": [
      { day: "Monday", shift: "Night", time: "10:00 PM - 6:00 AM" },
      { day: "Tuesday", shift: "Evening", time: "2:00 PM - 10:00 PM" },
      { day: "Wednesday", shift: "Night", time: "10:00 PM - 6:00 AM" },
      { day: "Thursday", shift: "Morning", time: "9:00 AM - 5:00 PM" },
      { day: "Friday", shift: "Evening", time: "2:00 PM - 10:00 PM" }
    ]
  }
},  

  "Amit Kumar": {
    "Production": {
      "Week": [
        { day: "Monday", shift: "Night", time: "10:00 PM - 6:00 AM" },
        { day: "Tuesday", shift: "Night", time: "10:00 PM - 6:00 AM" },
        { day: "Wednesday", shift: "Evening", time: "2:00 PM - 10:00 PM" },
        { day: "Thursday", shift: "Night", time: "10:00 PM - 6:00 AM" },
        { day: "Friday", shift: "Evening", time: "2:00 PM - 10:00 PM" }
      ]
    }
  }
};



/* ROUTES */
app.get('/api/metadata', (req, res) => {
  res.json(workforceData);
});

app.get('/api/schedule', (req, res) => {
  const { employee, department } = req.query;
  const data = workforceData[employee]?.[department]?.["Week"] || [];
  res.json(data);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));