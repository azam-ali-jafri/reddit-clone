# Reddit Clone

![Img](https://res.cloudinary.com/dg18lu61g/image/upload/v1697530650/projects%20thumbnails/Screenshot_2023-10-17_at_13-47-15_Reddit_Clone_hmfk7q.png)

### Features:
- Authentication via next-auth.
- Community & post creation.
- Post & comments upvotes/downvotes.
- Personalized & general feed.
- Redis cache for imporving performance.
- Prisma to interact with database.
- Uploadthing for storing images.

## Installation

#### Cloning the repository

```shell
git clone https://github.com/azam-ali-jafri/reddit-clone.git
```

#### Install packages

```shell
npm install or yarn install
```

#### Setup .env file

```js
DATABASE_URL=
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
REDIS_URL=
REDIS_SECRET=

```

#### Setup prisma
Add your database url then execute this command (I used mongoDB)
```shell
npx prisma db push
```

#### Start the app
```shell
npm run dev
```
