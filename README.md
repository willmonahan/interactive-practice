# Interactive Computing
## Practice Final

Hey everyone! This is the practice final exam for Interactive Computing, Fall 2018.

A quick disclaimer: I've spoken to Craig about the format the exam, but I HAVE NOT SEEN THE ACTUAL EXAM. I have no clue what Craig is going to ask you, but I've designed this practice exam as my best guess at what you're going to need to know. In my opinion, if you're comfortable completing the problems I've got here, you're going to do great on the final.

## "Rules"

Treat this practice exam the same way you'd treat the actual final exam. It's designed to be open book (more like open everything), so feel free to Google things, reference your previous assignments, or look at any of the examples that Craig has on the class website (I would recommend combing through them once or twice before the exam to jog your memory.)

I've create three challenges: one using normal p5, one using AR, and one using VR. On the actual exam, Craig is going to give you three challenges as well, and ask you to choose any 2 of the 3 that you want to complete. I would recommend you try to do all 3 here if you have time, to best prepare for the final.

You can start by downloading <a href="boilerplate.zip" download>this boilerplate code</a> to fill in your solutions. It has all libraries included, and is hooked up to be ready-to-go.

## [p5](p5)

In p5, the challenge is to create a particle system. Every time the user clicks the mouse, a new particle should appear at their position, and start moving in a random direction. The particles should bounce off all the walls. In my example, the particles fall downward using gravity, but this is OPTIONAL.

Each particle should get smaller over time, and once it shrinks small enough, it should be removed from the array (so the computer doesn't slow down too much).

The main topics that I'm looking for in this problem are building classes, instantiating classes as objects, using arrays & for-loops, and bouncing logic.

## [AR](ar)

In AR, the challenge is to create a butterfly catching game. I chose to use a net catching a butterfly, but you can use any theme that you'd like.

There should be a number of butterflies on the screen, moving randomly with Perlin noise. The player uses a Hiro AR marker to control a net/object. When the player gets close to a butterfly, that specific butterfly disappears. The butterflies are drawn using p5. When a butterfly hits any edge of the screen, it wraps-around to the other side.

The main topics that I'm looking for in this problem are building classes, using Perlin noise, using AR markers, loading & showing images in p5, and changing behavior using the distance function.

## [VR](vr)

**Note:** the clickFunction on OBJ files hasn't been working in AFramep5 lately, so use object primitives to click on, randomly positioned in the world. As well as this, *separately*, include at least one .obj file.

In VR, the challenge is to build a very simple game where the player collects objects in VR. I chose to make my objects look like coins using cylinders, but you can use any object-primitive that you'd like.

The objects should appear around the player in the VR world, and spin in place. When the user clicks on an object, a sound should play and the object should disappear from the world. You should also include one .obj file, somewhere in your VR world. I chose to include a [spaceship](https://poly.google.com/view/fojR5i3h_nh) spinning in place, but you can choose any 3D object to import, and you can move or spin it however you like. I would recommend starting your search for an object [here](https://poly.google.com/user/4aEd8rQgKu2), because these objects tend to work well with A-Frame.

The main topics I'm looking for here are using arrays/objects, adding many objects to the VR world, importing and displaying .obj files, using methods on A-Frame objects, and adding clickFunctions.

## [Solutions](https://github.com/willmonahan/interactive-practice)

Solutions, including comments, can be found [here](https://github.com/willmonahan/interactive-practice). These aren't necessarily the only way to solve these problems, they're just the way that I chose to approach it. They're also the actual code running on the examples in each question.

I have intentionally NOT obfuscated the source code for my examples - that is, if you open the source code, you will see the solution. This will not be the case on the actual final exam, the solutions will (obviously) be hidden. I've done this so that you have solutions available, but would recommend that you NOT look at the solutions unless you've given each problem a real try.