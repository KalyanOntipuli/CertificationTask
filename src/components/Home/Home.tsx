import Navbar from '../Navbar/Navbar'
import AllSkills from '../content/AllSkills';
import React, { useState } from 'react';
import Footer from '../Footer/Footer'
import HomeContent from './HomeContent';
const Home: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [typedText, setTypedText] = useState<string>('');
    return (
        <>
            <Navbar onCategorySelect={setSelectedCategory} onTextChange={setTypedText} />
            {(!selectedCategory && !typedText) && (<HomeContent />)}
            {(selectedCategory || typedText) && <AllSkills selectedCategory={selectedCategory} typedText={typedText} />}
            <Footer />
        </>

    );
}

export default Home