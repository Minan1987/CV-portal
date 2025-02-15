import {
    SentimentSatisfiedAltOutlined,
    CardMembershipOutlined,
    SchoolOutlined,
    DevicesOutlined,
    Diversity2Outlined,
    RoofingOutlined,
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
        { label: "دوره ها و گواهینامه ها", icon: <CardMembershipOutlined />, ...tabProps(2) },
        { label: "سوابق تحصیلی", icon: <SchoolOutlined />, ...tabProps(3) },
        { label: "سوابق شغلی", icon: <Diversity2Outlined />, ...tabProps(4) },
        { label: "نمونه کارها", icon: <DevicesOutlined />, ...tabProps(4) },
    ]
    return tabs
}



