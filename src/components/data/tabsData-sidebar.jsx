import {
    SentimentSatisfiedAltOutlined,
    CardMembershipOutlined,
    SchoolOutlined,
    DevicesOutlined,
    Diversity1Outlined,
    RoofingOutlined,
    AlternateEmailOutlined
} from '@mui/icons-material';

const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
}

export const tabsData = () => {
    
    const tabs = [
        { label: "صفحه اصلی", icon: <RoofingOutlined />, ...tabProps(0) },
        { label: "درباره من", icon: <SentimentSatisfiedAltOutlined />, ...tabProps(1) },
        { label: "سوابق تحصیلی", icon: <SchoolOutlined />, ...tabProps(2) },
        { label: "سوابق شغلی", icon: <Diversity1Outlined />, ...tabProps(3) },
        { label: "نمونه کارها", icon: <DevicesOutlined />, ...tabProps(4) },
        { label: "ارتباط با من", icon: <AlternateEmailOutlined />, ...tabProps(5) },
    ]
    return tabs
}



