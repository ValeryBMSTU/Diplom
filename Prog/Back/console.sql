CREATE TABLE IF NOT EXISTS public.user (
  id SERIAL PRIMARY KEY,
  login VARCHAR UNIQUE NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL,
  ava_path VARCHAR,
  role VARCHAR NOT NULL,
  is_blocked BOOL NOT NULL DEFAULT false,
  is_deleted BOOL NOT NULL DEFAULT false
);

CREATE TABLE IF NOT EXISTS public.session (
    id SERIAL PRIMARY KEY,
    key VARCHAR NOT NULL,
    exp TIMESTAMP NOT NULL,
    user_id SERIAL NOT NULL
);

CREATE TABLE IF NOT EXISTS public.chat (
    id SERIAL PRIMARY KEY,
    message VARCHAR NOT NULL,
    time TIMESTAMP NOT NULL,
    sender_id SERIAL NOT NULL,
    receiver_id SERIAL NOT NULL
);

CREATE TABLE IF NOT EXISTS public.users_service (
    id SERIAL PRIMARY KEY,
    users INTEGER NOT NULL,
    blocked_users INTEGER NOT NULL,
    deleted_users INTEGER NOT NULL,
    active_users_per_day INTEGER NOT NULL,
    new_users_per_day INTEGER NOT NULL,
    date TIMESTAMP NOT NULL
);


CREATE TABLE IF NOT EXISTS public.modeling (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP,
    user_id SERIAL NOT NULL
);

CREATE TABLE IF NOT EXISTS public.template (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOt NULL,
    params TEXT NOT NULL,
    modeling_id SERIAL NOT NULL
);

CREATE TABLE IF NOT EXISTS public.snapshot (
    id SERIAL PRIMARY KEY,
    step INTEGER,
    time TIME,
    env_data TEXT NOT NULL,
    agents_data TEXT NOT NULL,
    modeling_id SERIAL NOT NULL
);

CREATE TABLE IF NOT EXISTS public.agent (
    id SERIAL PRIMARY KEY,
    gen_code TEXT NOT NULL,
    modeling_id SERIAL NOT NULL
);

CREATE TABLE IF NOT EXISTS public.relation (
    id SERIAL PRIMARY KEY,
    parent_id SERIAL NOT NULL,
    child_id SERIAL NOT NULL
);

CREATE TABLE IF NOT EXISTS public.modelings_service (
    id SERIAL PRIMARY KEY,
    modelings INTEGER NOT NULL,
    active_modelings INTEGER NOT NULL,
    stopped_modelings INTEGER NOT NULL,
    ended_modelings  INTEGER NOT NULL,
    date TIMESTAMP NOT NULL
);



ALTER TABLE public.session
ADD FOREIGN KEY (user_id)
REFERENCES public.user(id);

ALTER TABLE public.chat
ADD FOREIGN KEY (sender_id)
REFERENCES public.user(id);

ALTER TABLE public.chat
ADD FOREIGN KEY (receiver_id)
REFERENCES public.user(id);

ALTER TABLE public.modeling
ADD FOREIGN KEY (user_id)
REFERENCES public.user(id);

ALTER TABLE public.template
ADD FOREIGN KEY (modeling_id)
REFERENCES public.modeling(id);

ALTER TABLE public.snapshot
ADD FOREIGN KEY (modeling_id)
REFERENCES public.modeling(id);

ALTER TABLE public.agent
ADD FOREIGN KEY (modeling_id)
REFERENCES public.modeling(id);

ALTER TABLE public.relation
ADD FOREIGN KEY (parent_id)
REFERENCES public.agent(id);

ALTER TABLE public.relation
ADD FOREIGN KEY (child_id)
REFERENCES public.agent(id);



DROP TABLE IF EXISTS public.user CASCADE;
DROP TABLE IF EXISTS public.session CASCADE;
DROP TABLE IF EXISTS public.chat CASCADE;
DROP TABLE IF EXISTS public.users_service CASCADE;
DROP TABLE IF EXISTS public.modeling CASCADE;
DROP TABLE IF EXISTS public.template CASCADE;
DROP TABLE IF EXISTS public.snapshot CASCADE;
DROP TABLE IF EXISTS public.agent CASCADE;
DROP TABLE IF EXISTS public.relation CASCADE;















SELECT u.nickname, u.email, u.fullname, u.about
  FROM forum."user" as u
  WHERE u.nickname IN (
  SELECT t.author AS nickname
  FROM forum.thread as t
  WHERE t.forum = 'wGa-ZcZESEP-8'
  UNION
  SELECT p.author AS nickname
  FROM forum.post as p
  WHERE p.forum = 'wGa-ZcZESEP-8' )
  ORDER BY u.nickname
  LIMIT 100;

WITH RECURSIVE temp1 (author, created, forum, id, isEdited, message, parent, thread, PATH, LEVEL, root ) AS (
		SELECT T1.author, T1.created, T1.forum, T1.id, T1.isEdited, T1.message, T1.parent, T1.thread, CAST (10000 + T1.id AS VARCHAR (50)) as PATH, 1, T1.id as root
		FROM forum.post as T1 WHERE T1.parent = 0 and T1.thread = 57
		union
		select T2.author, T2.created, T2.forum, T2.id, T2.isEdited, T2.message, T2.parent, T2.thread, CAST ( temp1.PATH ||'->'|| 10000 + T2.id AS VARCHAR(50)), LEVEL + 1, root
		FROM forum.post T2 INNER JOIN temp1 ON( temp1.id = T2.parent)
		)
		select root, id, parent, thread, PATH from temp1 ORDER BY root, PATH LIMIT 30;

INSERT INTO forum.post (author, message, parent, thread, forum)
		VALUES ($1,$2,$3,$4,$5) RETURNING id, thread;

INSERT INTO forum.status VALUES (1,0,0,0,0) RETURNING id;

 TRUNCATE forum.vote, forum.post, forum.thread, forum.forum, forum.user RESTART IDENTITY CASCADE;

 SELECT
  (SELECT COALESCE(SUM(forum.posts), 0) FROM forum.forum WHERE posts > 0) AS post,
  (SELECT COALESCE(SUM(forum.threads), 0) FROM forum.forum WHERE threads > 0) AS thread,
  (SELECT COUNT(*) FROM forum.user) AS user,
  (SELECT COUNT(*) FROM forum.forum) AS forum;


CREATE OR REPLACE FUNCTION vote_add() RETURNS TRIGGER AS $emp_audit$
BEGIN
UPDATE forum.thread
SET votes = votes + NEW.voice
WHERE id = NEW.thread;
RETURN NULL;
END;
$emp_audit$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION thread_add() RETURNS TRIGGER AS $emp_audit$
    BEGIN
    UPDATE forum.forum
    SET threads = threads + 1
    WHERE slug = NEW.forum;
    RETURN NULL;
    END;
$emp_audit$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION post_add() RETURNS TRIGGER AS $emp_audit$
    BEGIN
    UPDATE forum.forum
    SET posts = posts + 1
    WHERE slug = NEW.forum;
    RETURN NULL;
    END;
$emp_audit$ LANGUAGE plpgsql;



CREATE OR REPLACE FUNCTION forum_status_inc() RETURNS TRIGGER AS $emp_audit$
    BEGIN
    UPDATE forum.status
    SET forum = forum + 1
    WHERE status.id = 1;
    RETURN NULL;
    END;
$emp_audit$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION post_status_inc() RETURNS TRIGGER AS $emp_audit$
    BEGIN
    UPDATE forum.status
    SET post = post + 1
    WHERE status.id = 1;
    RETURN NULL;
    END;
$emp_audit$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION post_status_inc() RETURNS TRIGGER AS $emp_audit$
    BEGIN
    UPDATE forum.status
    SET thread = thread + 1
    WHERE status.id = 1;
    RETURN NULL;
    END;
$emp_audit$ LANGUAGE plpgsql;


CREATE TRIGGER vote_insert
    AFTER INSERT
    ON forum.vote
    FOR EACH ROW EXECUTE PROCEDURE vote_add(vote);


CREATE TRIGGER thread_insert
  AFTER INSERT
  ON forum.thread
  FOR EACH ROW EXECUTE PROCEDURE thread_add();


CREATE TRIGGER post_insert
  AFTER INSERT
  ON forum.post
  FOR EACH ROW EXECUTE PROCEDURE post_add();



