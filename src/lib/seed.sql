-- ============================================================
-- SEED — watchlog
-- ============================================================

-- On vidange d'abord pour pouvoir relancer le seed proprement
TRUNCATE TABLE reviews CASCADE;
TRUNCATE TABLE movies  CASCADE;
TRUNCATE TABLE users   CASCADE;

-- Réinitialise les séquences (SERIAL)
ALTER SEQUENCE users_id_seq   RESTART WITH 1;
ALTER SEQUENCE movies_id_seq  RESTART WITH 1;
ALTER SEQUENCE reviews_id_seq RESTART WITH 1;

-- ============================================================
-- USERS
-- ============================================================
INSERT INTO users (username, email, password_hash) VALUES
  ('alice',  'alice@example.com',  '$2b$10$Placeholder_AliceHashXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'),
  ('bob',    'bob@example.com',    '$2b$10$Placeholder_BobHashXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'),
  ('sarah',  'sarah@example.com',  '$2b$10$Placeholder_SarahHashXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'),
  ('thomas', 'thomas@example.com', '$2b$10$Placeholder_ThomasHashXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');

-- ============================================================
-- MOVIES
-- ============================================================
INSERT INTO movies (title, posterUrl, synopsis, casting, director, year) VALUES
  (
    'The Godfather',
    'https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
    'Le fils d''un parrain de la mafia est forcé à prendre le contrôle de l''empire criminel familial.',
    'Marlon Brando, Al Pacino, James Caan, Robert Duvall',
    'Francis Ford Coppola',
    1972
  ),
  (
    'Inception',
    'https://image.tmdb.org/t/p/w500/k68nOAerrMc3v0gMLpI4bcYkB9Y.jpg',
    'Un voleur spécialisé dans l''extraction de secrets depuis les rêves reçoit une mission : implanter une idée dans l''esprit de quelqu''un.',
    'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Ken Watanabe',
    'Christopher Nolan',
    2010
  ),
  (
    'Parasite',
    'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    'Une famille pauvre infiltre astucieusement le foyer d''une famille riche, avec des conséquences inattendues.',
    'Song Kye-un, Lee Sun-kyun, Choi Weo-shul, Park So-dam',
    'Bong Joon-ho',
    2019
  ),
  (
    'Pulp Fiction',
    'https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaivUcWlZ.jpg',
    'Des histoires entrelacées de boxeurs, de hitmen et de criminels dans Los Angeles, racontées de manière non-linéaire.',
    'John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis',
    'Quentin Tarantino',
    1994
  ),
  (
    'Interstellar',
    'https://image.tmdb.org/t/p/w500/k4jfxrFbW0WtX27F7xkQBV68pYt.jpg',
    'Une équipe d''astronautes traverse un trou de ver pour trouver une nouvelle maison pour l''humanité, face à la fin de la Terre.',
    'Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine',
    'Christopher Nolan',
    2014
  ),
  (
    'The Shawshank Redemption',
    'https://image.tmdb.org/t/p/w500/9O7sLYzxiSr8h2KanfnqibbKoA2.jpg',
    'Un homme condamné à tort pour un double meurtre raconte son histoire sur 20 ans passés dans une prison d''État.',
    'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
    'Frank Darabont',
    1994
  ),
  (
    'Fight Club',
    'https://image.tmdb.org/t/p/w500/adw6Lq9FiC9zjYEpOqffully8LQ.jpg',
    'Un homme sans identité crée un club de combat secrèt qui évolue en mouvement anarchiste.',
    'Brad Pitt, Edward Norton, Helena Bonham Carter',
    'David Fincher',
    1999
  ),
  (
    'The Matrix',
    'https://image.tmdb.org/t/p/w500/f89U3ADLd1voiEBAYXJpvi2yC42.jpg',
    'Un hacker découvre que la réalité telle qu''il la connaît est une simulation élaborée par des machines.',
    'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
    'Les Wachowskis',
    1999
  ),
  (
    'Whiplash',
    'https://image.tmdb.org/t/p/w500/gXbCJlUSIoZhEuPifPKNIANzPxL.jpg',
    'Un étudiant en jazz ambitieux est confronté à un professeur brutal qui pousse ses élèves jusqu''à leurs limites.',
    'Miles Teller, J.K. Simmons',
    'Damien Chazelle',
    2014
  ),
  (
    'Blade Runner 2049',
    'https://image.tmdb.org/t/p/w500/gajQCPL6hAZSvlXYbvk0pGifgbb.jpg',
    'Un officier de police futuriste découvre un secret qui pourrait chambouler l''ordre de la société.',
    'Ryan Gosling, Harrison Ford, Ana de Armas, Jared Leto',
    'Denis Villeneuve',
    2017
  ),
  (
    'Mad Max: Fury Road',
    'https://image.tmdb.org/t/p/w500/bqGrMVdThaDNotoUyYbMxMQ5Rdm.jpg',
    'Dans un monde post-apocalyptique, une femme commandante fuit avec des femmes enlevées pour leur liberté.',
    'Tom Hardy, Charlize Theron, Nicholas Hoult',
    'George Miller',
    2015
  ),
  (
    'Gladiator',
    'https://image.tmdb.org/t/p/w500/bRTFajWG2LvbCjNUSP7pGrNxeEF.jpg',
    'Un général romain trahison, réduit à l''esclavage, cherche vengeance contre l''empereur qui a assassiné sa famille.',
    'Russell Crowe, Joaquin Phoenix, Connie Nielsen',
    'Ridley Scott',
    2000
  ),
  (
    '1917',
    'https://image.tmdb.org/t/p/w500/AZhzaG4nCd6hMghsC9FaMnGiNJV.jpg',
    'Deux soldats britanniques traversent le no man''s land pendant la Première Guerre mondiale pour transmettre un message crucial.',
    'George MacKay, Dean-Charles Chapman, Benedict Cumberbatch',
    'Sam Mendes',
    2019
  ),
  (
    'Spirited Away',
    'https://image.tmdb.org/t/p/w500/39FAbd63CRx2sLvI38bSBx8P2zJ.jpg',
    'Une petite fille embarquée dans un monde spirituel mystérieux doit trouver un moyen de libérer ses parents.',
    'Daveigh Chase (VF: various)',
    'Hayao Miyazaki',
    2001
  ),
  (
    'The Dark Knight',
    'https://image.tmdb.org/t/p/w500/1m2L94XQKSfODd4AxCLVd4SHuun.jpg',
    'Batman fait face à son plus grand adversaire, le Joker, qui sème le chaos dans Gotham City.',
    'Christian Bale, Heath Ledger, Aaron Eckhart, Gary Oldman',
    'Christopher Nolan',
    2008
  );

-- ============================================================
-- REVIEWS
-- Chaque user note quelques films (pas tous les mêmes)
-- UNIQUE (user_id, movie_id) → pas de doublons
-- ============================================================
INSERT INTO reviews (rating, comment, created_at, movie_id, user_id) VALUES

  -- Alice (user 1) note 6 films
  (10, 'Un chef-d''œuvre absolu, impossible à oublier.', '2024-11-12 20:30:00', 1, 1),  -- The Godfather
  (9,  'Nolan à son meilleur. Chaque visionnage révèle quelque chose de nouveau.', '2024-11-15 22:10:00', 2, 1),  -- Inception
  (8,  'Brillant mais un peu long. Le deuxième acte est énorme.', '2024-12-01 19:45:00', 3, 1),  -- Parasite
  (7,  NULL, '2024-12-10 21:00:00', 4, 1),  -- Pulp Fiction (pas de commentaire)
  (9,  'La bande originale alone vaut le coup. Visuellement dingue.', '2025-01-02 23:15:00', 5, 1),  -- Interstellar
  (6,  'Bien fait mais pas aussi bon qu''on en parle.', '2025-01-18 18:30:00', 8, 1),  -- The Matrix

  -- Bob (user 2) note 5 films
  (7,  'Classic. Mais j''ai du mal à accrocher au début.', '2024-10-22 21:00:00', 1, 2),  -- The Godfather
  (10, 'Le meilleur film que j''ai jamais vu. Point.', '2024-10-25 20:00:00', 6, 2),  -- Shawshank
  (8,  'Tarantino fait ce qu''il fait le mieux : du dialogue qui claque.', '2024-11-03 22:30:00', 4, 2),  -- Pulp Fiction
  (5,  'Pas mal mais j''ai attendu plus de Villeneuve.', '2024-12-20 19:00:00', 10, 2),  -- Blade Runner 2049
  (9,  'Intense du début à la fin. J.K. Simmons est incroyable.', '2025-01-10 20:45:00', 9, 2),  -- Whiplash

  -- Sarah (user 3) note 6 films
  (8,  'Parasite est un masterclass de mise en scène.', '2024-09-14 21:30:00', 3, 3),  -- Parasite
  (10, 'Fury Road est juste de la pure adrénaline. Parfait.', '2024-09-20 22:00:00', 11, 3),  -- Mad Max
  (7,  'Belle histoire, Russell Crowe excellente dedans.', '2024-10-05 19:15:00', 12, 3),  -- Gladiator
  (9,  'Le sens créatif de Miyazaki est unique.', '2024-11-28 20:00:00', 14, 3),  -- Spirited Away
  (8,  NULL, '2024-12-15 23:00:00', 2, 3),  -- Inception
  (6,  'Impressionnant techniquement mais l''histoire reste simple.', '2025-01-22 18:45:00', 13, 3);  -- 1917

  -- Thomas (user 4) note 5 films
INSERT INTO reviews (rating, comment, created_at, movie_id, user_id) VALUES
  (9,  'Ledger pour la dernière fois... absolument magnifique.', '2024-08-10 21:00:00', 15, 4),  -- The Dark Knight
  (10, 'Fight Club m''a changer la façon de voir les choses.', '2024-08-18 22:30:00', 7, 4),  -- Fight Club
  (8,  'The Matrix a inventé un genre. Respect.', '2024-09-02 20:15:00', 8, 4),  -- The Matrix
  (7,  'Bon film de sci-fi. Pas le meilleur de Nolan.', '2024-10-11 19:45:00', 5, 4),  -- Interstellar
  (6,  NULL, '2024-11-05 21:30:00', 6, 4);  -- Shawshank

-- ============================================================
-- Vérification rapide après exécution :
--   SELECT u.username, m.title, r.rating, r.comment
--   FROM reviews r
--   JOIN users u ON r.user_id = u.id
--   JOIN movies m ON r.movie_id = m.id
--   ORDER BY u.username, r.rating DESC;
-- ============================================================