import React, { useState } from "react";

const content = [
    {
        tab : 'Section 1',
        content: "content of the Section 1"
    },
    {
        tab : 'Section 2',
        content: 'content of the Section 2'
    }
]

const useTab = (initialTab, allTabs) => {
    const [currentIdx, setCurrentIndex] = useState(initialTab);

    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    return {
        currentItem : allTabs[currentIdx],
        changeItem : setCurrentIndex
    }
}

const Tab = () => {
    const {currentItem, changeItem} = useTab(0, content);
    return (
        <div>
            {content.map((section, index) => <button key={index} onClick={() => changeItem(index)} style={{width : "100px", height: "100px"}}>{section.tab}</button>)}
            <div>{currentItem.content}</div>
        </div>
    )
}

export default Tab;