import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { useEffect } from 'react';
import { PrismaClient } from '@prisma/client';
import { wouldYouUnpackThatForMe } from '../db/getAllData.js';

const prisma = new PrismaClient();

export default function Profile() {
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    const prismaCall = async () => {
      const dbCourses = await prisma.user.findMany({
        include: {
          Course: {
            include: {
              Review: true,
            },
          },
        },
      });

      console.log('dbCourses, ', dbCourses);
      return dbCourses;
    };

    const test = async () => {
      const bigDbData = await prismaCall()
        .catch((e) => {
          throw e;
        })
        .finally(async () => {
          await prisma.$disconnect();
        });
      const [coursesMap] = wouldYouUnpackThatForMe(bigDbData);
    };
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}

// if the user.email === user in our data
// allow
// if not, deny
