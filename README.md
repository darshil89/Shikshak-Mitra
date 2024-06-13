# Y2KNOW


datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id            String    @id @default(auto()) @map("_id") @db.ObjectId
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  role          Role
  accounts      Account[]
  sessions      Session[]

  createdClasses Class[]        @relation("ClassCreatedBy")
  courses        Course[]       @relation("TeacherCourses")
 

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum Role {
  student
  admin
  teacher
}

model Course {
  id           String       @id @default(auto()) @map("_id") @db.ObjectId
  courseName   String
  courseCode   String
  teacherEmail String
  classes      Class[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  adminId String @db.ObjectId
  admin   User   @relation("TeacherCourses", fields: [adminId], references: [id], onDelete: Cascade)
}

model Class {
  id             String         @id @default(auto()) @map("_id") @db.ObjectId
  name           String
  day            String
  startTime      String
  endTime        String
  courseId       String         @db.ObjectId
  createdBy      String         @db.ObjectId
  

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  course  Course @relation(fields: [courseId], references: [id], onDelete: Cascade)
  creator User   @relation("ClassCreatedBy", fields: [createdBy], references: [id], onDelete: Cascade)
}



// just for google auth 
model Account {
  id                String  @id @default(auto()) @map("_id") @db.ObjectId
  userId            String  @db.ObjectId
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.String
  access_token      String? @db.String
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.String
  session_state     String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(auto()) @map("_id") @db.ObjectId
  sessionToken String   @unique
  userId       String   @db.ObjectId
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model VerificationToken {
  id         String   @id @default(auto()) @map("_id") @db.ObjectId
  identifier String
  token      String
  expires    DateTime

  @@unique([identifier, token])
}
