---
layout: post
title: "The Supermarket Scramble Timeline"
modified-date: 2021-02-25
---

I started coding in the summer of 2019.

A long time before that I attended a Sylvan game-programming course after school.
I got tired of Hour of Code in elementary and Scratch's interface (though both are good for learning basic concepts) because I wanted to create something that was truly my own.

So that summer, I began learning Python with [Codecademy][codecademy].
Partway in, I switched over to C++ then C# because that was what the Unity game engine used.
When school started again I continued learning.
Codecademy's course didn't cover stuff particular to Unity so when I finished the course I was on my own with Microsoft and Unity's expansive documentation. And Google. And StackOverflow.
If you're unfamiliar, programming questions are answered on StackOverflow and nearly all, if not all programmers beginner to professional rely on it.

A couple of friends and I began a little company called Stupid Dino Studios to produce video games for.
It fell apart after a bunch of months, but during its lifetime I began my first game.
It was a text adventure for the Windows console.
I never finished it because I wanted to move outside the console.

My first Unity project idea was way too ambitious for my experience.
I wanted to make a store management game and called it *Supermarket Scramble*.
That was scrapped later because we realized there was a Shopkins product that shared the name.
I still wanted the alliteration so I thought up something else.
Its current name will be revealed later in the year.

The very first attempt at making the thing looked like this:

### #1: Mid-2019
![Attempt 1][1]

You can see the Stupid Dino Studios attribution in the lower-left corner.

I was most proud of the item-scanning system in this version but everything else in it was substantially inefficient.
To allow the player to hold items, I forced the item to stay at a constant offset away from where the player was looking.
This meant that no matter what, the item would remain floating in front of the player even if an environment element was in the way.
Immovable objects would intersect the object.
Physics objects would be pushed, no matter how heavy.
The scanning system uses an detection box and the information placed on the monitor in-game was attached to each "product".

Customers throughout the versions were a special marker of progress.
The first version had a single orange block representing a customer.
It was a lifeless physics object that could be tipped over.
I decided to restart because it would take more effort to restructure all of my bad code than to just start over.
Bad code (bad for unreadability, inefficiency, or unnecessary complexity) meant adding new features was difficult since they built upon the existing codebase.
The next version brought huge improvements including the new name.

### #2: Late-2019
![Attempt 2][2]

Already there's a noticeable jump in quality.
These immaculate textures were sourced from [cgbookcase][cgbookcase].

These customers were pill-shaped and glowed around the edges.
They could pathfind to a random item on a shelf and had randomized messages above their heads while walking around or if they ran into an object on the ground and reacted to the player throwing something at them.
This was the first version with the ability to take orders but I didn't implement a proper way for them to form lines so if multiple queued at a register they bunched up in front of it.
That was broken.
I kept learning through the mistakes and restarts; the main lesson of this version was navigation and 3D-modeling with Blender.

I replaced the crude monitor model from the first version with a separate crude model for this one, complete with a realistic perfect-grid keyboard.
It also had scanner and water bottle models.

My modeling skills improved alongside my programming but for the following restart I took a bit of a break from Blender except to model easter eggs for my testers to find.
I asked my friends to test these versions and inspect them for bugs, which, obviously, were numerous.

### 3: Mid-2020
![Attempt 3][3]

Apart from a jazzy checker pattern, mid-2020's customers looked practically unchanged.
Their behavior, however, was fundamentally different. They were able to form simple lines, for one thing.
But when the line approached an obstacle it broke.
I was using a very rudimentary system that took the position of the last customer in line (or, if there weren't any, the position of the register) and added a certain number to calculate a position right behind them.

The problem was it didn't account for obstacles.
Customers would try to form a long enough line and if they weren't able to pathfind towards the calculated point, they would start to bunch up around it.
Positions that were calculated in front of or behind the obstacle had no issues but the line needed instead to be generated around the obstacle.
I didn't know how to do that so I didn't do it.

A major feature in this version was a save system.
I followed a tutorial to create a system that took whatever data I gave it, converted it into a binary file, and stored it on the player's computer.
It worked wonders but I didn't have anything useful to store in it except for a variable that represented the amount of money you had.
I experimented with an upgrade system as well which worked alright but I didn't have a use for it at the time--upgrades were a feature that shouldn't have been prioritized as much as it was.

There were sparse sound effects too and improved ordering but they were easy enough to implement so it's not important.
I took a break from making the game after that to work on a separate game (the last one on the [project list][upcoming]) with my friends who I'd formed another company with.
We eventually shelved it because progress was slow.
After that, I went back to making my game.

### 4: Late-2020 to now
![Attempt 4][4]

Note that since this is a current work-in-progress, there will be inaccuracies over time with what I say here.

With custom textures, animated customer rigs, even better models, and sparkling graphics, the final version so far is on-track to being the one I eventually release.
I recently went over the code again to improve it instead of restarting because I didn't want to set up the project again.
At that point, restarting is unprofitable.

These customers I made in Blender and set up to randomly generate their features.
Skin color, clothing colors, an optional watch, hair styles, and hair color are all randomly picked.
All their faces are identical: wide smile and dot eyes.

The line formation problems were addressed in this version.
I coded a generator that started with a spot in front of the register for the first customer and used the old method of calculating a position behind that but, crucially, it had an extra check for collision with obstacles both in a radius around that point and between it and the position before it. 
If an obstacle was detected it would test different positions left (or counter-clockwise) and right (or clockwise).
Once it found a valid position it continued with the next position, up to a specified limit.
The first checked direction is chosen at random for variety.
It was fun to see it succeed for the first time.

Here's a little visual for that:

{:refdef: style="text-align: center;"}
![Line Algorithm Visual][visual]
{:refdef}

*p1, p2, etc. are the final points for customers to move towards when they line up.*

My algorithm was perfect (arguably) but there were still some slight bugs with how customers arranged themselves.
I still see it as an improvement.

Other things I'm proud of are ambient sound effects from YouTube's audio library, physics-based item-holding (like Half-Life 2), and security cameras with post-processing effects.
I'm working on better customer logic and containers as of this post.

An idea for another post is an in-depth look at the code for all the versions but 1, a lot of files are gone and 2, I'm not sure if anyone would be interested.
If that's something you would or wouldn't want to see, I'd appreciate you answering the poll at the end of this.
By the way, if you want to play the in-progress game and you're able to contact me on anything other than the e-mail provided here, just ask.

So there--my 2021-appropriately-sized blog post. Over a thousand words. 👏

**The dated headings for each picture are estimates, accurate within a few months--some of the files are gone so I couldn't get exact dates for each attempt. What I did get was from the file creation date in Windows.*

### Poll

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeyh6YQv7Zs-zO7Am4aUoMZ7_XMW-dirVb_8TPMb-gbKmN_hw/viewform?embedded=true" width="100%" height="951" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

[codecademy]: https://www.codecademy.com/
[1]: /assets/images/1.png
[2]: /assets/images/2.png
[3]: /assets/images/3.png
[4]: /assets/images/4.png
[cgbookcase]: https://www.cgbookcase.com/
[upcoming]: /upcoming
[visual]: /assets/images/lineAlgorithmVisual.png