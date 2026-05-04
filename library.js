/**
 * [Bridge Academy Library Master Database V22.5]
 * Total: 24 Themes, 120 Books (Series A & Level B Integrated)
 * Structure: ID (MONTH-SERIES-NUM), Title, Theme, Inquiry Question, Target Words
 */

const BRIDGE_LIBRARY = [
    // --- JANUARY ---
    { id: "JAN-A-1", month: "Jan", series: "A", theme: "All About Me", question: "나는 누구일까요?", title: "I Like Myself!", words: "Me, Special, Happy" },
    { id: "JAN-A-2", month: "Jan", series: "A", theme: "All About Me", question: "나는 누구일까요?", title: "The Color Monster", words: "Feelings, Color, Emotion" },
    { id: "JAN-A-3", month: "Jan", series: "A", theme: "All About Me", question: "나는 누구일까요?", title: "My Five Senses", words: "Eyes, Ears, Nose, Mouth" },
    { id: "JAN-A-4", month: "Jan", series: "A", theme: "All About Me", question: "나는 누구일까요?", title: "The Family Book", words: "Family, House, Together" },
    { id: "JAN-A-5", month: "Jan", series: "A", theme: "All About Me", question: "나는 누구일까요?", title: "From Head to Toe", words: "Body, Movement, Hands" },
    
    { id: "JAN-B-1", month: "Jan", series: "B", theme: "Me on the Map", question: "나는 세상 어디에 살고 있을까?", title: "Me on the Map", words: "Map, World, Home" },
    { id: "JAN-B-2", month: "Jan", series: "B", theme: "Me on the Map", question: "나는 세상 어디에 살고 있을까?", title: "This Is How We Do It", words: "Friend, School, Different" },
    { id: "JAN-B-3", month: "Jan", series: "B", theme: "Me on the Map", question: "나는 세상 어디에 살고 있을까?", title: "Whoever You Are", words: "World, Heart, Same" },
    { id: "JAN-B-4", month: "Jan", series: "B", theme: "Me on the Map", question: "나는 세상 어디에 살고 있을까?", title: "Madeline", words: "Paris, Yellow hat, Twelve" },
    { id: "JAN-B-5", month: "Jan", series: "B", theme: "Me on the Map", question: "나는 세상 어디에 살고 있을까?", title: "We're All Wonders", words: "Kind, Star, Unique" },

    // --- FEBRUARY ---
    { id: "FEB-A-1", month: "Feb", series: "A", theme: "Little Crawlers", question: "작은 곤충들의 세상은 어떨까?", title: "The Very Hungry Caterpillar", words: "Caterpillar, Food, Butterfly" },
    { id: "FEB-A-2", month: "Feb", series: "A", theme: "Little Crawlers", question: "작은 곤충들의 세상은 어떨까?", title: "The Very Busy Spider", words: "Spider web, Fly, Spin" },
    { id: "FEB-A-3", month: "Feb", series: "A", theme: "Little Crawlers", question: "작은 곤충들의 세상은 어떨까?", title: "The Grouchy Ladybug", words: "Ladybug, Sun, Time" },
    { id: "FEB-A-4", month: "Feb", series: "A", theme: "Little Crawlers", question: "작은 곤충들의 세상은 어떨까?", title: "Waiting for Wings", words: "Egg, Flower, Wing" },
    { id: "FEB-A-5", month: "Feb", series: "A", theme: "Little Crawlers", question: "작은 곤충들의 세상은 어떨까?", title: "The Honeybee", words: "Bee, Yellow, Honey" },

    { id: "FEB-B-1", month: "Feb", series: "B", theme: "How Things Grow", question: "아주 작은 씨앗은 어떻게 꽃이 될까?", title: "The Tiny Seed", words: "Seed, Wind, Flower" },
    { id: "FEB-B-2", month: "Feb", series: "B", theme: "How Things Grow", question: "아주 작은 씨앗은 어떻게 꽃이 될까?", title: "From Caterpillar to Butterfly", words: "Chrysalis, Change, Fly" },
    { id: "FEB-B-3", month: "Feb", series: "B", theme: "How Things Grow", question: "아주 작은 씨앗은 어떻게 꽃이 될까?", title: "Planting a Rainbow", words: "Garden, Colors, Bulb" },
    { id: "FEB-B-4", month: "Feb", series: "B", theme: "How Things Grow", question: "아주 작은 씨앗은 어떻게 꽃이 될까?", title: "A Seed Is Sleepy", words: "Soil, Water, Sprout" },
    { id: "FEB-B-5", month: "Feb", series: "B", theme: "How Things Grow", question: "아주 작은 씨앗은 어떻게 꽃이 될까?", title: "Up in the Garden and Down in the Dirt", words: "Roots, Dirt, Green" },

    // --- MARCH ---
    { id: "MAR-A-1", month: "Mar", series: "A", theme: "My Super Family", question: "우리 가족은 어떤 초능력이 있을까?", title: "My Mom", words: "Mom, Super, Love" },
    { id: "MAR-A-2", month: "Mar", series: "A", theme: "My Super Family", question: "우리 가족은 어떤 초능력이 있을까?", title: "My Dad", words: "Dad, Brave, Strong" },
    { id: "MAR-A-3", month: "Mar", series: "A", theme: "My Super Family", question: "우리 가족은 어떤 초능력이 있을까?", title: "Love You Forever", words: "Baby, Bear, Night" },
    { id: "MAR-A-4", month: "Mar", series: "A", theme: "My Super Family", question: "우리 가족은 어떤 초능력이 있을까?", title: "Guess How Much I Love You", words: "Rabbit, Big, High" },
    { id: "MAR-A-5", month: "Mar", series: "A", theme: "My Super Family", question: "우리 가족은 어떤 초능력이 있을까?", title: "The Night Before Mother's Day", words: "Present, Card, Kitchen" },

    { id: "MAR-B-1", month: "Mar", series: "B", theme: "Animal Homes", question: "동물들은 왜 각자 다른 집에 살까?", title: "A House is a House for Me", words: "Shell, Nest, Different" },
    { id: "MAR-B-2", month: "Mar", series: "B", theme: "Animal Homes", question: "동물들은 왜 각자 다른 집에 살까?", title: "Welcome Home, Bear", words: "Bear, Forest, Mountain" },
    { id: "MAR-B-3", month: "Mar", series: "B", theme: "Animal Homes", question: "동물들은 왜 각자 다른 집에 살까?", title: "The Great Kapok Tree", words: "Jungle, Tree, Green" },
    { id: "MAR-B-4", month: "Mar", series: "B", theme: "Animal Homes", question: "동물들은 왜 각자 다른 집에 살까?", title: "Over in the Meadow", words: "Meadow, Sun, Turtle" },
    { id: "MAR-B-5", month: "Mar", series: "B", theme: "Animal Homes", question: "동물들은 왜 각자 다른 집에 살까?", title: "Who Lives Here?", words: "Cave, Secret, Animal" },

    // --- APRIL ---
    { id: "APR-A-1", month: "Apr", series: "A", theme: "Under the Sea", question: "바다 밑에는 누가 살고 있을까?", title: "The Pout-Pout Fish", words: "Fish, Ocean, Pout" },
    { id: "APR-A-2", month: "Apr", series: "A", theme: "Under the Sea", question: "바다 밑에는 누가 살고 있을까?", title: "Commotion in the Ocean", words: "Shark, Whale, Crab" },
    { id: "APR-A-3", month: "Apr", series: "A", theme: "Under the Sea", question: "바다 밑에는 누가 살고 있을까?", title: "The Rainbow Fish", words: "Scale, Shiny, Friend" },
    { id: "APR-A-4", month: "Apr", series: "A", theme: "Under the Sea", question: "바다 밑에는 누가 살고 있을까?", title: "I'm the Biggest Thing in the Ocean", words: "Big, Small, Giant" },
    { id: "APR-A-5", month: "Apr", series: "A", theme: "Under the Sea", question: "바다 밑에는 누가 살고 있을까?", title: "Swimmy", words: "Together, Team, Sea" },

    { id: "APR-B-1", month: "Apr", series: "B", theme: "Water Wonders", question: "무거운 배는 어떻게 물에 뜰까?", title: "Who Sank the Boat?", words: "Boat, Float, Sink" },
    { id: "APR-B-2", month: "Apr", series: "B", theme: "Water Wonders", question: "무거운 배는 어떻게 물에 뜰까?", title: "Hey, Water!", words: "Rain, Ice, Steam" },
    { id: "APR-B-3", month: "Apr", series: "B", theme: "Water Wonders", question: "무거운 배는 어떻게 물에 뜰까?", title: "A Drop Around the World", words: "Cycle, Travel, Drop" },
    { id: "APR-B-4", month: "Apr", series: "B", theme: "Water Wonders", question: "무거운 배는 어떻게 물에 뜰까?", title: "The Water Princess", words: "Well, Clean, Life" },
    { id: "APR-B-5", month: "Apr", series: "B", theme: "Water Wonders", question: "무거운 배는 어떻게 물에 뜰까?", title: "All the Water in the World", words: "Nature, Flow, Earth" },

    // --- MAY ---
    { id: "MAY-A-1", month: "May", series: "A", theme: "Colors of Weather", question: "날씨에도 색깔이 있을까?", title: "Rain", words: "Rain, Blue, Umbrella" },
    { id: "MAY-A-2", month: "May", series: "A", theme: "Colors of Weather", question: "날씨에도 색깔이 있을까?", title: "The Little Raindrop", words: "Sky, Cloud, Fall" },
    { id: "MAY-A-3", month: "May", series: "A", theme: "Colors of Weather", question: "날씨에도 색깔이 있을까?", title: "Cloudy with a Chance of Meatballs", words: "Food, Storm, Wind" },
    { id: "MAY-A-4", month: "May", series: "A", theme: "Colors of Weather", question: "날씨에도 색깔이 있을까?", title: "Elmer and the Rainbow", words: "Elmer, Colors, Path" },
    { id: "MAY-A-5", month: "May", series: "A", theme: "Colors of Weather", question: "날씨에도 색깔이 있을까?", title: "Worm Weather", words: "Worm, Mud, Puddle" },

    { id: "MAY-B-1", month: "May", series: "B", theme: "Inside My Body", question: "우리가 밥을 먹으면 배 속에서 무슨 일이 생길까?", title: "Me and My Amazing Body", words: "Body, Skin, Bone" },
    { id: "MAY-B-2", month: "May", series: "B", theme: "Inside My Body", question: "우리가 밥을 먹으면 배 속에서 무슨 일이 생길까?", title: "Look Inside Your Body", words: "Inside, Muscle, Blood" },
    { id: "MAY-B-3", month: "May", series: "B", theme: "Inside My Body", question: "우리가 밥을 먹으면 배 속에서 무슨 일이 생길까?", title: "The Magic School Bus Inside the Human Body", words: "Bus, Cells, Organs" },
    { id: "MAY-B-4", month: "May", series: "B", theme: "Inside My Body", question: "우리가 밥을 먹으면 배 속에서 무슨 일이 생길까?", title: "Hear Your Heart", words: "Beat, Heart, Sound" },
    { id: "MAY-B-5", month: "May", series: "B", theme: "Inside My Body", question: "우리가 밥을 먹으면 배 속에서 무슨 일이 생길까?", title: "Parts", words: "Body parts, Health, Care" },

    // --- JUNE ---
    { id: "JUN-A-1", month: "Jun", series: "A", theme: "Space Adventure", question: "달나라로 소풍을 가면 무엇이 필요할까?", title: "There's No Place Like Space", words: "Moon, Star, Rocket" },
    { id: "JUN-A-2", month: "Jun", series: "A", theme: "Space Adventure", question: "달나라로 소풍을 가면 무엇이 필요할까?", title: "Roaring Rockets", words: "Blast, Engine, Space" },
    { id: "JUN-A-3", month: "Jun", series: "A", theme: "Space Adventure", question: "달나라로 소풍을 가면 무엇이 필요할까?", title: "How to Catch a Star", words: "Star, Sky, Reach" },
    { id: "JUN-A-4", month: "Jun", series: "A", theme: "Space Adventure", question: "달나라로 소풍을 가면 무엇이 필요할까?", title: "Papa, Please Get the Moon for Me", words: "Moon, Ladder, Night" },
    { id: "JUN-A-5", month: "Jun", series: "A", theme: "Space Adventure", question: "달나라로 소풍을 가면 무엇이 필요할까?", title: "Blast Off!", words: "Suit, Ship, Galaxy" },

    { id: "JUN-B-1", month: "Jun", series: "B", theme: "Little Inventors", question: "내 머릿속 아이디어를 어떻게 진짜로 만들까?", title: "Rosie Revere, Engineer", words: "Build, Fix, Machine" },
    { id: "JUN-B-2", month: "Jun", series: "B", theme: "Little Inventors", question: "내 머릿속 아이디어를 어떻게 진짜로 만들까?", title: "What Do You Do With an Idea?", words: "Idea, Mind, Dream" },
    { id: "JUN-B-3", month: "Jun", series: "B", theme: "Little Inventors", question: "내 머릿속 아이디어를 어떻게 진짜로 만들까?", title: "The Most Magnificent Thing", words: "Design, Tool, Best" },
    { id: "JUN-B-4", month: "Jun", series: "B", theme: "Little Inventors", question: "내 머릿속 아이디어를 어떻게 진짜로 만들까?", title: "Iggy Peck, Architect", words: "House, Plan, Bridge" },
    { id: "JUN-B-5", month: "Jun", series: "B", theme: "Little Inventors", question: "내 머릿속 아이디어를 어떻게 진짜로 만들까?", title: "Boxitects", words: "Box, Create, Art" },

    // --- JULY ---
    { id: "JUL-A-1", month: "Jul", series: "A", theme: "Dinos Rule!", question: "공룡들은 어떻게 친구가 되었을까?", title: "How Do Dinosaurs Say Good Night?", words: "Dino, Sleep, Kiss" },
    { id: "JUL-A-2", month: "Jul", series: "A", theme: "Dinos Rule!", question: "공룡들은 어떻게 친구가 되었을까?", title: "Dinosaurs, Dinosaurs", words: "Tail, Neck, Big" },
    { id: "JUL-A-3", month: "Jul", series: "A", theme: "Dinos Rule!", question: "공룡들은 어떻게 친구가 되었을까?", title: "Danny and the Dinosaur", words: "Danny, Friend, Park" },
    { id: "JUL-A-4", month: "Jul", series: "A", theme: "Dinos Rule!", question: "공룡들은 어떻게 친구가 되었을까?", title: "If the Dinosaurs Came Back", words: "Back, City, Road" },
    { id: "JUL-A-5", month: "Jul", series: "A", theme: "Dinos Rule!", question: "공룡들은 어떻게 친구가 되었을까?", title: "Stomp, Dinosaur, Stomp!", words: "Stomp, Ground, Run" },

    { id: "JUL-B-1", month: "Jul", series: "B", theme: "Earth and Beyond", question: "태양계 행성들은 왜 다르게 생겼을까?", title: "Moon! Earth's Best Friend", words: "Moon, Earth, Friend" },
    { id: "JUL-B-2", month: "Jul", series: "B", theme: "Earth and Beyond", question: "태양계 행성들은 왜 다르게 생겼을까?", title: "Our Stars", words: "Stars, Sun, Bright" },
    { id: "JUL-B-3", month: "Jul", series: "B", theme: "Earth and Beyond", question: "태양계 행성들은 왜 다르게 생겼을까?", title: "Sun! One in a Billion", words: "Sun, Billion, Fire" },
    { id: "JUL-B-4", month: "Jul", series: "B", theme: "Earth and Beyond", question: "태양계 행성들은 왜 다르게 생겼을까?", title: "If You Decide to Go to the Moon", words: "Space, Travel, Moon" },
    { id: "JUL-B-5", month: "Jul", series: "B", theme: "Earth and Beyond", question: "태양계 행성들은 왜 다르게 생겼을까?", title: "Little Kids First Big Book of Space", words: "Planets, Solar, System" },

    // --- AUGUST ---
    { id: "AUG-A-1", month: "Aug", series: "A", theme: "My Five Senses & Food", question: "맛있는 소리는 어떤 느낌일까?", title: "Eating the Alphabet", words: "Food, Apple, Banana" },
    { id: "AUG-A-2", month: "Aug", series: "A", theme: "My Five Senses & Food", question: "맛있는 소리는 어떤 느낌일까?", title: "Green Eggs and Ham", words: "Green, Eggs, Ham" },
    { id: "AUG-A-3", month: "Aug", series: "A", theme: "My Five Senses & Food", question: "맛있는 소리는 어떤 느낌일까?", title: "Stone Soup", words: "Soup, Stone, Cook" },
    { id: "AUG-A-4", month: "Aug", series: "A", theme: "My Five Senses & Food", question: "맛있는 소리는 어떤 느낌일까?", title: "Growing Vegetable Soup", words: "Grow, Veggie, Pot" },
    { id: "AUG-A-5", month: "Aug", series: "A", theme: "My Five Senses & Food", question: "맛있는 소리는 어떤 느낌일까?", title: "Yummy Yucky", words: "Yummy, Yucky, Taste" },

    { id: "AUG-B-1", month: "Aug", series: "B", theme: "Colors & Masterpieces", question: "색깔을 섞으면 어떤 감정이 될까?", title: "The Dot", words: "Dot, Art, Draw" },
    { id: "AUG-B-2", month: "Aug", series: "B", theme: "Colors & Masterpieces", question: "색깔을 섞으면 어떤 감정이 될까?", title: "Mix It Up!", words: "Mix, Color, Hands" },
    { id: "AUG-B-3", month: "Aug", series: "B", theme: "Colors & Masterpieces", question: "색깔을 섞으면 어떤 감정이 될까?", title: "Ish", words: "Drawing, Mind, Free" },
    { id: "AUG-B-4", month: "Aug", series: "B", theme: "Colors & Masterpieces", question: "색깔을 섞으면 어떤 감정이 될까?", title: "Beautiful Oops!", words: "Oops, Error, Beautiful" },
    { id: "AUG-B-5", month: "Aug", series: "B", theme: "Colors & Masterpieces", question: "색깔을 섞으면 어떤 감정이 될까?", title: "Swatch: The Girl Who Loved Color", words: "Girl, Colors, Love" },

    // --- SEPTEMBER ---
    { id: "SEP-A-1", month: "Sep", series: "A", theme: "Who are the Helpers?", question: "우리 마을을 돕는 영웅은 누구일까?", title: "Clothesline Clues to Jobs People Do", words: "Job, Clothes, Help" },
    { id: "SEP-A-2", month: "Sep", series: "A", theme: "Who are the Helpers?", question: "우리 마을을 돕는 영웅은 누구일까?", title: "Whose Hat Is This?", words: "Hat, Hero, Town" },
    { id: "SEP-A-3", month: "Sep", series: "A", theme: "Who are the Helpers?", question: "우리 마을을 돕는 영웅은 누구일까?", title: "Fire Truck", words: "Fire, Truck, Ladder" },
    { id: "SEP-A-4", month: "Sep", series: "A", theme: "Who are the Helpers?", question: "우리 마을을 돕는 영웅은 누구일까?", title: "Doctor De Soto", words: "Doctor, Teeth, Mouse" },
    { id: "SEP-A-5", month: "Sep", series: "A", theme: "Who are the Helpers?", question: "우리 마을을 돕는 영웅은 누구일까?", title: "Officer Buckle and Gloria", words: "Police, Dog, Safety" },

    { id: "SEP-B-1", month: "Sep", series: "B", theme: "Let's Be Friends", question: "진짜 좋은 친구란 어떤 걸까?", title: "Stick and Stone", words: "Stick, Stone, Best" },
    { id: "SEP-B-2", month: "Sep", series: "B", theme: "Let's Be Friends", question: "진짜 좋은 친구란 어떤 걸까?", title: "A Sick Day for Amos McGee", words: "Amos, Zoo, Caring" },
    { id: "SEP-B-3", month: "Sep", series: "B", theme: "Let's Be Friends", question: "진짜 좋은 친구란 어떤 걸까?", title: "Enemy Pie", words: "Pie, Enemy, Friend" },
    { id: "SEP-B-4", month: "Sep", series: "B", theme: "Let's Be Friends", question: "진짜 좋은 친구란 어떤 걸까?", title: "Peanut Butter & Cupcake", words: "PB, Cupcake, Play" },
    { id: "SEP-B-5", month: "Sep", series: "B", theme: "Let's Be Friends", question: "진짜 좋은 친구란 어떤 걸까?", title: "Strictly No Elephants", words: "Elephant, All, Welcome" },

    // --- OCTOBER ---
    { id: "OCT-A-1", month: "Oct", series: "A", theme: "How do we Go?", question: "하늘, 땅, 바다 어디든 갈 수 있다면?", title: "Go, Dog. Go!", words: "Dog, Car, Travel" },
    { id: "OCT-A-2", month: "Oct", series: "A", theme: "How do we Go?", question: "하늘, 땅, 바다 어디든 갈 수 있다면?", title: "Freight Train", words: "Train, Tracks, Color" },
    { id: "OCT-A-3", month: "Oct", series: "A", theme: "How do we Go?", question: "하늘, 땅, 바다 어디든 갈 수 있다면?", title: "Don't Let the Pigeon Drive the Bus!", words: "Pigeon, Bus, Drive" },
    { id: "OCT-A-4", month: "Oct", series: "A", theme: "How do we Go?", question: "하늘, 땅, 바다 어디든 갈 수 있다면?", title: "The Little Engine That Could", words: "Engine, Hill, Hope" },
    { id: "OCT-A-5", month: "Oct", series: "A", theme: "How do we Go?", question: "하늘, 땅, 바다 어디든 갈 수 있다면?", title: "Cars and Trucks and Things That Go", words: "Cars, Trucks, Go" },

    { id: "OCT-B-1", month: "Oct", series: "B", theme: "Time Travelers", question: "공룡 시대부터 지금까지 세상은 어떻게 변했을까?", title: "The Little House", words: "House, Time, City" },
    { id: "OCT-B-2", month: "Oct", series: "B", theme: "Time Travelers", question: "공룡 시대부터 지금까지 세상은 어떻게 변했을까?", title: "Window", words: "Window, View, Change" },
    { id: "OCT-B-3", month: "Oct", series: "B", theme: "Time Travelers", question: "공룡 시대부터 지금까지 세상은 어떻게 변했을까?", title: "First the Egg", words: "Egg, Bird, Grow" },
    { id: "OCT-B-4", month: "Oct", series: "B", theme: "Time Travelers", question: "공룡 시대부터 지금까지 세상은 어떻게 변했을까?", title: "Once Upon a Time", words: "Story, Old, Long" },
    { id: "OCT-B-5", month: "Oct", series: "B", theme: "Time Travelers", question: "공룡 시대부터 지금까지 세상은 어떻게 변했을까?", title: "A Street Through Time", words: "Street, History, Time" },

    // --- NOVEMBER ---
    { id: "NOV-A-1", month: "Nov", series: "A", theme: "Wild Animals", question: "정글 속 동물들은 무엇을 좋아할까?", title: "Dear Zoo", words: "Zoo, Animal, Box" },
    { id: "NOV-A-2", month: "Nov", series: "A", theme: "Wild Animals", question: "정글 속 동물들은 무엇을 좋아할까?", title: "Brown Bear, Brown Bear, What Do You See?", words: "Bear, See, Bird" },
    { id: "NOV-A-3", month: "Nov", series: "A", theme: "Wild Animals", question: "정글 속 동물들은 무엇을 좋아할까?", title: "Walking Through the Jungle", words: "Jungle, Walk, Sound" },
    { id: "NOV-A-4", month: "Nov", series: "A", theme: "Wild Animals", question: "정글 속 동물들은 무엇을 좋아할까?", title: "The Mixed-Up Chameleon", words: "Color, Change, Shape" },
    { id: "NOV-A-5", month: "Nov", series: "A", theme: "Wild Animals", question: "정글 속 동물들은 무엇을 좋아할까?", title: "Polar Bear, Polar Bear, What Do You Hear?", words: "Hear, Sound, Ice" },

    { id: "NOV-B-1", month: "Nov", series: "B", theme: "Earth Heroes", question: "우리가 사는 지구를 어떻게 지켜줄 수 있을까?", title: "Michael Recycle", words: "Recycle, Earth, Save" },
    { id: "NOV-B-2", month: "Nov", series: "B", theme: "Earth Heroes", question: "우리가 사는 지구를 어떻게 지켜줄 수 있을까?", title: "10 Things I Can Do to Help My World", words: "Help, World, Care" },
    { id: "NOV-B-3", month: "Nov", series: "B", theme: "Earth Heroes", question: "우리가 사는 지구를 어떻게 지켜줄 수 있을까?", title: "The Lorax", words: "Tree, Protect, Speak" },
    { id: "NOV-B-4", month: "Nov", series: "B", theme: "Earth Heroes", question: "우리가 사는 지구를 어떻게 지켜줄 수 있을까?", title: "Compost Stew", words: "Compost, Dirt, Earth" },
    { id: "NOV-B-5", month: "Nov", series: "B", theme: "Earth Heroes", question: "우리가 사는 지구를 어떻게 지켜줄 수 있을까?", title: "Here We Are", words: "Note, Earth, Living" },

    // --- DECEMBER ---
    { id: "DEC-A-1", month: "Dec", series: "A", theme: "Winter & Holidays", question: "겨울은 왜 따뜻한 계절일까?", title: "The Snowy Day", words: "Snow, White, Warm" },
    { id: "DEC-A-2", month: "Dec", series: "A", theme: "Winter & Holidays", question: "겨울은 왜 따뜻한 계절일까?", title: "The Giving Tree", words: "Tree, Give, Heart" },
    { id: "DEC-A-3", month: "Dec", series: "A", theme: "Winter & Holidays", question: "겨울은 왜 따뜻한 계절일까?", title: "Bear Stays Up for Christmas", words: "Bear, Awake, Gift" },
    { id: "DEC-A-4", month: "Dec", series: "A", theme: "Winter & Holidays", question: "겨울은 왜 따뜻한 계절일까?", title: "Little Tree", words: "Little, Leaves, Grow" },
    { id: "DEC-A-5", month: "Dec", series: "A", theme: "Winter & Holidays", question: "겨울은 왜 따뜻한 계절일까?", title: "How the Grinch Stole Christmas", words: "Grinch, Joy, Share" },

    { id: "DEC-B-1", month: "Dec", series: "B", theme: "Festivals of Light", question: "세계의 친구들은 겨울을 어떻게 기념할까?", title: "Lights of Winter", words: "Light, Dark, Candle" },
    { id: "DEC-B-2", month: "Dec", series: "B", theme: "Festivals of Light", question: "세계의 친구들은 겨울을 어떻게 기념할까?", title: "Let's Celebrate!", words: "Party, World, Joy" },
    { id: "DEC-B-3", month: "Dec", series: "B", theme: "Festivals of Light", question: "세계의 친구들은 겨울을 어떻게 기념할까?", title: "The Polar Express", words: "Train, Bell, Believe" },
    { id: "DEC-B-4", month: "Dec", series: "B", theme: "Festivals of Light", question: "세계의 친구들은 겨울을 어떻게 기념할까?", title: "Lucia Morning in Sweden", words: "Crown, Light, Sweden" },
    { id: "DEC-B-5", month: "Dec", series: "B", theme: "Festivals of Light", question: "세계의 친구들은 겨울을 어떻게 기념할까?", title: "Seven Spools of Thread", words: "Thread, Color, Work" }
];
