## Introduction

Angular code is mainly made up of HTML templates and TypeScript components, but for Angular applications to run in the browser, they have to be compiled to JavaScript code.

There are two main ways of compiling Angular code to JavaScript.

Just-in-time (JIT) compilation — This is when the code is compiled in the browser at runtime.

Ahead-of-time (AOT) compilation — This is when the code is compiled as part of the build process, hence the name ahead-of-time.
Starting with Angular version 9, the default compilation of choice is AOT. This means that whenever you build your Angular application for production with the command ng build --prod, the application will also be compiled as part of the build process.

Note: For Angular version 8 and older, to compile using AOT, use the command ng build --prod --aot=true.

## Advantages of AOT compilation

At this stage, you might be wondering what AOT has to offer. Below are some advantages of AOT compilation over JIT compilation.

Faster rendering of your Angular application — With AOT, the code is compiled during the build process. Therefore, the browser loads executable code that is ready to be rendered immediately. Very fast!

Smaller Angular application size — There is no need to download the Angular compiler since the application is already compiled. If the compilation is to happen in the browser at runtime like in JIT, the Angular application is shipped together with an Angular compiler. The compiler is roughly half the size of Angular itself. Pretty heavy right?

Better code quality — This is because template errors are detected early as the application compiles as part of the build process.
More secure and robust applications — That’s because the HTML templates and TypeScript components are not evaluated dynamically at runtime in the browser. This leads to fewer opportunities for injection attacks.

## How AOT Works

Angular Ivy is the new compilation and rendering pipeline in Angular version 9 and newer. Angular Ivy is super-fast and efficient compared to its predecessor View Engine.

The main things that will happen during the compilation are tree-shaking, bundling, uglification, and minification of code. In addition, the compiler removes Angular specific decorators, constructor parameters, and unused code.

The compilation happens in three main phases, as follows:

### 1. Code analysis

This is where the compiler analyses Angular specific metadata such as @Component() and @Input(). The metadata is what gives Angular the required info that it uses to construct instances of the application, for example, how to create a component and produce a visual representation of it. Angular represents the overall structure of decorator metadata inside .metadata.json files.

Metadata syntax violation errors are also detected and recorded in this phase.

One of the main outputs of the code analysis phase is type definition files, which have the extension .d.ts. The AOT compiler uses these files to generate application code. A sample .d.ts file looks as follows.


### 2. Code generation

During the second phase of compilation, the compiler will interpret the output of the .metadata.json files produced in phase one above. It will also check if the semantics of the metadata are compliant with compiler rules.

Metadata rewriting is another critical step that happens in this phase. For example, if arrow functions are found in metadata expressions, the code generation phase will rewrite that function into a form that is more friendly to the compiler.

### 3. Template type checking

The final phase of the compilation has a lot to do with Angular templates, i.e., the files that hold HTML code. In this phase, the compiler will type-check expressions so that they do not cause crashes at runtime.

The Angular compiler also makes use of the TypeScript compiler to validate binding expressions in templates. When type errors are detected, the template validation produces appropriate error messages.

Note: With Angular Ivy, the template checker is a bit stricter than its predecessor View Engine. As a result, some templates with type-checking errors that compile in View Engine may not do so in Angular Ivy.

## Minor Drawbacks of AOT

The advantages that AOT compilation offers far outweigh its drawbacks. However, it is good to be aware of some minor issues with AOT.

DevOps Build pipelines or local builds will normally take longer if you are using AOT compilation compared to JIT compilation.
AOT does not support arrow or lambda functions and function expressions in metadata expressions. An error is generated during the analysis phase of the compilation if you happen to have such functions in metadata expressions. Note: Newer versions of Angular will try to automatically do this conversion for you.


# What is JIT

According to Wikipedia:

In computing, just-in-time (JIT) compilation is a way of executing computer code that involves compilation during execution of a program — at run time — rather than before execution.

The typical compilation process (non-JIT or Ahead-of-Time compilation) translates a high-level programming language to machine code at compile time. During execution of the program (runtime), machine code is fixed. Just-in-Time is a technique to generate/re-generate machine code at runtime. How it is implemented varies, the machine code can be generated through intermediate representation saved at compile time, or re-generated through a less-optimized version of machine code.

Why is it useful? There are 2 main motivations to use JIT today:

1. Use runtime data to find optimization opportunities.

2. Support more hardware architectures.

## Use Case 1: Use runtime data to find optimization opportunities

Programs contain static parts and dynamic parts. Dynamic parts are not known at compile time. To understand it, take the following JavaScript code for example:

function add(a, b) {

return a + b;

}

The above code will “add” variable a and b. What unknown at compile time are:

The type/range of a and b.
How many times does this function get called?
How much memory is needed to store the result?
Is this function used or not?
The compiler would make a smarter optimization decision had it known any of them. They are not feasible at compile time because the user didn’t provide them in the code and the compiler can’t guess/find them easily. However, the information may be available at runtime. With that, the program can be further optimized.

Let’s look at a specific problem and see how JIT can reduce save execution time dramatically.

The program contains “hot code” that occupies most of the execution time. Optimizing “hot code” can significantly speed up the program. But without running the code, the compiler does not know where the hot code is.

In the baseline case, where “hot code” is not identified and further optimized, the program can deal with 1 input every second. The initial compile time takes 2 seconds. The total execution time for 100 input data is :

2 + 1 * 100 examples = 102 seconds.

With JIT optimization enabled, the runtime would first use the initially compiled version (2 seconds) and run it on the first 10 inputs with profiling which takes 1 * 10 = 10 seconds. Then it will look at profiling data and decide to optimize the “hot code” aggressively using JIT which takes 5 seconds and reduces the processing time for one input to 0.1 seconds. The total runtime is reduced to:

2 + 1 * 10 examples + 5 + 0.1 * 90 examples = 26 seconds.

In the real world, it’s more complicated than this. But you got the idea. The process of gathering runtime information and deciding what code needs to be heavily optimized by applying what specific optimization is sophisticated and people have invested decades of research into it. They are all driven by a strong and simple idea: leveraging runtime information to enable JIT optimizations.

## Use Case 2: Support more hardware architectures

To understand this problem, we need to look at history and know what problems computer scientists were facing at the moment.

When hardware architectures design CPUs, they expose a programming interface called “machine code” or ISA(instruction set architecture) as CPUs’ input. Different CPUs use different machine code as programming interfaces.

A compiler translates high-level programming language to machine code. However, machine code is different on every CPU architecture. To support a language on N type of architectures, developers have to build N compilers which is impossible. This also makes it really hard for users to port their applications across different CPU architectures.

To solve this problem, the concept of “virtual machine” is introduced. In simple words, it’s a software layer on different CPU architectures and exposing the same programming interface (virtual machine ISA) for applications running on top of it. The most famous virtual machine ISA is Java bytecode.

When JIT is used, at compile time, only virtual machine ISA is generated. The executable can be ported to any machine that has runtime support. Virtual machine ISA is JIT-compiled to machine code at runtime. (Write Once Run Anywhere)

Not only is this a good idea for application developers, it’s also an amazing invention for language creators and hardware vendors. The existence of virtual machines (and other intermediate representations) really separates the work boundary between high level compiling processes and low-level target-specific transformations. Imagine how hard it can be for a new language to adopt all architectures. it would be even impossible for a hardware vendor to support every programming language directly.

In addition, “more architecture” today is not limited just to CPU architectures. In heterogeneous computing and deep learning world where a compiler can target not only CPU but GPU and other processors, JIT techniques help the executable compile once and run optimized on a variety of processors.

