import React from 'react'

const Banner = () => {
  return (
      <div className="block md:flex md:space-x-2 px-2 lg:p-0">
        <a 
          className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block" 
          style={{ height: '24em' }}
          href="#"
        >
          <div className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}></div>
          <img src="https://img.freepik.com/premium-photo/nature-technology-two-faces-conflict-concept-generative-ai_839051-389.jpg" className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" alt="First Example" />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Architecto</span>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              "In a world divided by design and instinct… two forces stare into each other’s soul. Nature, organic and ancient, breathes with rhythm, whispers with wind."
            </h2>
            <div className="flex mt-3">
              <img src="https://cdn.pixabay.com/photo/2023/08/08/08/08/ai-generated-8176702_1280.jpg" className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
              <div>    
                <p className="font-semibold text-gray-200 text-sm"> Alima Sullivan </p>
                <p className="font-semibold text-gray-400 text-xs"> 14 Jan </p>
              </div>
            </div>
          </div>
        </a>

        <a className="w-full md:w-1/3 relative rounded" 
          style={{ height: '24em' }}
          href="#"
        >
          <div className="absolute left-0 top-0 w-full h-full z-10"
            style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}></div>
          <img src="https://aimst.edu.my/wp-content/uploads/2023/04/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai.jpg" className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" alt="Second Example" />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Science</span>
            <h2 className="text-3xl font-semibold text-gray-100 leading-tight"> "The future doesn't belong to one or the other—it belongs to their harmony."</h2>
            <div className="flex mt-3">
              <img src="https://cdn.pixabay.com/photo/2023/06/22/01/34/ai-generated-8080329_960_720.jpg" className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
              <div>
                <p className="font-semibold text-gray-200 text-sm"> Micheal Okonkwo </p>
                <p className="font-semibold text-gray-400 text-xs"> 15 Oct </p>
              </div>
            </div>
          </div>
        </a>
      </div>
 
  )
}

export default Banner