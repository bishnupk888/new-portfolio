// function Projects() {
//   return (
//     <section className="py-20 px-6">
//       <h2 className="text-3xl font-bold text-center mb-10">
//         Projects
//       </h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="bg-gray-900 p-6 rounded-lg">
//           <h3 className="text-xl font-semibold">Project 1</h3>
//           <p className="text-gray-400 mt-2">
//             Description of the project.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;

function Projects() {
  return (
    <section id="projects" className="py-20 px-6">

      <h2 className="text-3xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Project One</h3>
          <p className="text-gray-400 mt-2">
            A React project example.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Project Two</h3>
          <p className="text-gray-400 mt-2">
            Another cool project.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Project Two</h3>
          <p className="text-gray-400 mt-2">
            Another cool project.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Projects;