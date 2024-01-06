"use client"
import React, { useState } from 'react';
import TechnologyCheckbox from '@/app/ui/technology-checkbox';
import NextButton from '@/app/ui/next-button';





export default function TechForm(){

    const technologies = [
        {value: "HTML", id: "htmlOption"},
        {value: "CSS", id: "cssOption"},
        {value: "JavaScript", id: "javaScriptOption"},
        {value: "Python", id: "pythonOption"},
        {value: "PHP", id: "phpOption"},
        {value: "React", id: "reactOption"},
        {value: "Vue", id: "vueOption"},
        {value: "Angular", id: "angularOption"},
        {value: "Svelte", id: "sveleteOption"},
        {value: "Node.js", id: "nodeOption"},
        {value: "Django", id: "djangoOption"},
        {value: "Flask", id: "flaskOption"},
        {value: "Ruby on Rails", id: "rubyOption"},
        {value: "Laravel", id: "laravelOption"},
        {value: "Spring Boot", id: "springBootOption"},
        {value: "MongoDB", id: "mongoOption"},
        {value: "MySQL", id: "mysqlOption"},
        {value: "PostgreSQL", id: "pgrsqlOption"},
        {value: "SQLite", id: "sqlOption"},
        {value: "Git", id: "gitOption"},
        {value: "Webpack", id: "webpackOption"},
        {value: "Babel", id: "babelOption"},
        {value: "Tailwind", id: "tailwindOption"},
        {value: "Bootstrap", id: "bootstrapOption"},
        {value: "Jest", id: "jestOption"},
        {value: "Mocha", id: "mochaOption"},
        {value: "Jasmine", id: "jasmineOption"},
        {value: "Cypress", id: "cypressOption"},
        {value: "AWS", id: "awsOption"},
        {value: "Azure", id: "azureOption"},
        {value: "Google Cloud", id: "googleCloudOption"},
    ]
  
    return(
        <div className="flex flex-col w-full h-full">
            <div className="flex w-full justify-center mb-titleHeader"><span className="text-header text-monokaiYellow">Tech Stack</span></div>
            <div className="flex flex-col md:flex-row w-full h-full">
                <div className="flex w-full md:w-1/2 mb-formInput justify-center md:justify-end">
                    <div className="flex flex-col w-full md:w-2/3 mx-2">
                    <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational w-full">&lt;Pick the Stuff You Use&gt;</label><br></br>
                        <div className="flex flex-wrap mb-formInput">
                            <TechnologyCheckbox value="HTML" id="htmlOption"></TechnologyCheckbox>
                            <TechnologyCheckbox value="CSS" id="cssOption"></TechnologyCheckbox>
                            <TechnologyCheckbox value="JavaScript" id="javaScriptOption"></TechnologyCheckbox>
                            <TechnologyCheckbox value="Python" id="pythonOption"></TechnologyCheckbox>
                            <TechnologyCheckbox value="HTML" id="htmlOption"></TechnologyCheckbox>
                            <TechnologyCheckbox value="CSS" id="cssOption"></TechnologyCheckbox>
                            <TechnologyCheckbox value="JavaScript" id="javaScriptOption"></TechnologyCheckbox>
                            <TechnologyCheckbox value="Python" id="pythonOption"></TechnologyCheckbox>
                        </div>
                        {/* <div className="flex flex-col items-center 2xl:flex-row w-full justify-between mb-formInput">
                      
                        </div> */}
                    </div>
                </div>
                <div className="flex w-full md:w-1/2 justify-center md:justify-start">
                    <div className="w-full md:w-2/3 mx-2">
                        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;Describe your Skillset/Experience&gt;</label><br></br>
                        <textarea name="bio" className="h-largeTextarea opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}