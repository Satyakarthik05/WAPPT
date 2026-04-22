import pptxgen from "pptxgenjs";

// Asset Imports
import slidevideo from "../../assests/slidevideo.mp4";
import introvideo from "../../assests/introvideo.mp4";
import dashboardvideo from "../../assests/dashboard.mp4";
import registervideo from "../../assests/registervideo.mp4";
import leaderImage from "../../assests/image.png";
import customersImg from "../../assests/customers.jpg";
import districtsImg from "../../assests/districts.jpeg";
import expertImg from "../../assests/expert.jpeg";
import kriyaLogo from "../../assests/kriya.jpeg";

export const generatePPTX = async () => {
    const pres = new pptxgen();
    pres.layout = "LAYOUT_WIDE";
    pres.defineSlideMaster({
        title: "MASTER_SLIDE",
        background: { color: "FFFFFF" },
    });

    // --- SLIDE 01: OPENING ---
    const slide1 = pres.addSlide();
    slide1.background = { color: "020617" };
    slide1.addMedia({ type: "video", path: slidevideo, x: 0, y: 0, w: "100%", h: "100%" });
    slide1.addText("WEALTH ASSOCIATES", {
        x: 0, y: "35%", w: "100%", align: "center", fontSize: 72, color: "FFFFFF", bold: true, fontFace: "Inter"
    });
    slide1.addText("Building Wealth Through Real Estate", {
        x: 0, y: "55%", w: "100%", align: "center", fontSize: 28, color: "CBD5E1", fontFace: "Inter"
    });

    // --- SLIDE 02: LEADERSHIP ---
    const slide2 = pres.addSlide();
    slide2.background = { color: "F8FAFC" };
    slide2.addImage({ path: leaderImage, x: 1, y: 1, w: 4, h: 5.5, rounding: true });
    slide2.addText("Naresh Paritala", { x: 5.5, y: 1.5, w: 6, fontSize: 44, bold: true, color: "0F172A" });
    slide2.addText("Founder / Visionary Leader", { x: 5.5, y: 2.3, w: 6, fontSize: 24, color: "2563EB", bold: true });
    slide2.addShape(pres.ShapeType.rect, { x: 5.5, y: 2.8, w: 1, h: 0.1, fill: { color: "2563EB" } });
    slide2.addText(
        "A visionary entrepreneur with 32 years of professional experience and 7 years in real estate and digital innovation. Pioneered the integration of technology with traditional real estate practices. Currently serving as interim president of APARDA.",
        { x: 5.5, y: 3.2, w: 6, h: 3, fontSize: 18, color: "334155", lineSpacing: 24 }
    );
    slide2.addText("20+ Years Experience", { x: 5.5, y: 5.8, w: 3, fontSize: 20, bold: true, color: "2563EB" });

    // --- SLIDE 03: ABOUT REAL ESTATE ---
    const slide3 = pres.addSlide();
    slide3.background = { color: "1E3A8A" }; // Deep Blue
    slide3.addText("Real Estate – A Wealth Engine", { x: 0, y: 1, w: "100%", align: "center", fontSize: 48, color: "FFFFFF", bold: true });
    slide3.addText("Pathway to sustainable wealth creation through strategic investment.", { x: 1, y: 2, w: 11, align: "center", fontSize: 22, color: "BFDBFE" });
    const highlights = [
        { t: "Long-term Growth", d: "Consistent appreciation over time" },
        { t: "Stable Asset", d: "Tangible and secure investment" },
        { t: "Increasing Demand", d: "Growing population and urbanization" }
    ];
    highlights.forEach((item, idx) => {
        slide3.addShape(pres.ShapeType.rect, { x: 1 + idx * 4, y: 3.5, w: 3, h: 2, fill: { color: "FFFFFF", transparency: 90 }, line: { color: "FFFFFF", width: 1 } });
        slide3.addText(item.t, { x: 1 + idx * 4, y: 4, w: 3, align: "center", fontSize: 20, color: "FFFFFF", bold: true });
        slide3.addText(item.d, { x: 1 + idx * 4, y: 4.6, w: 3, align: "center", fontSize: 16, color: "BFDBFE" });
    });

    // --- SLIDE 04: FUTURE VALUATION ---
    const slide4 = pres.addSlide();
    slide4.background = { color: "ECFDF5" };
    slide4.addText("Market Growth & Future Potential", { x: 1, y: 0.5, w: 11, fontSize: 42, bold: true, color: "064E3B", align: "center" });
    const stats = [
        { v: "88+ Lakh Cr", d: "Market growth by 2030", c: "3B82F6" },
        { v: "2x–3x", d: "Growth Potential (5-10 yrs)", c: "8B5CF6" },
        { v: "8%–11%", d: "Average Annual CAGR", c: "10B981" }
    ];
    stats.forEach((s, i) => {
        slide4.addShape(pres.ShapeType.rect, { x: 1 + i * 4, y: 1.5, w: 3.2, h: 1.8, fill: { color: s.c }, line: { color: s.c } });
        slide4.addText(s.v, { x: 1 + i * 4, y: 1.8, w: 3.2, align: "center", fontSize: 32, bold: true, color: "FFFFFF" });
        slide4.addText(s.d, { x: 1 + i * 4, y: 2.5, w: 3.2, align: "center", fontSize: 16, color: "FFFFFF" });
    });
    slide4.addText("Projected Market Value (Lakh Crore)", { x: 1, y: 3.8, w: 11, align: "center", fontSize: 20, bold: true, color: "064E3B" });
    slide4.addShape(pres.ShapeType.rect, { x: 2, y: 4.5, w: 9, h: 2.5, fill: { color: "FFFFFF" }, line: { color: "E5E7EB", width: 1 } });
    slide4.addText("[Market Trend Chart: 2024 to 2030 Growth]", { x: 2, y: 5.5, w: 9, align: "center", color: "9CA3AF" });

    // --- SLIDE 05: REALTORS & CUSTOMERS ---
    const slide5 = pres.addSlide();
    slide5.addImage({ path: customersImg, x: 0.5, y: 1, w: 5, h: 5.5 });
    slide5.addText("Realtors & Customers", { x: 6, y: 1.5, w: 6, fontSize: 44, bold: true, color: "0F172A" });
    slide5.addText("Bridging the gap between professional expertise and client needs. Our platform empowers both ends of the real estate spectrum.", {
        x: 6, y: 2.5, w: 6, fontSize: 20, color: "475569"
    });

    // --- SLIDE 06: MARKETING STRATEGY ---
    const slide6 = pres.addSlide();
    slide6.addText("Marketing Strategy", { x: 0, y: 0.5, w: "100%", align: "center", fontSize: 44, bold: true });
    slide6.addText("Visibility + Trust + Leads", { x: 2, y: 1.5, w: 9, h: 0.6, align: "center", fontSize: 24, fill: { color: "2563EB" }, color: "FFFFFF", bold: true });
    slide6.addText("The Four Ps", { x: 1, y: 2.5, fontSize: 22, bold: true });
    const ps = ["Product", "Price", "Place", "Promotion"];
    ps.forEach((p, i) => {
        slide6.addShape(pres.ShapeType.rect, { x: 1 + i * 1.6, y: 3.2, w: 1.4, h: 1.2, fill: { color: "F3F4F6" } });
        slide6.addText(p, { x: 1 + i * 1.6, y: 3.6, w: 1.4, align: "center", fontSize: 16, bold: true });
    });
    slide6.addText("Marketing Types", { x: 8, y: 2.5, fontSize: 22, bold: true });
    const types = ["Conventional", "Agent", "Direct", "Referral", "Digital"];
    types.forEach((t, i) => {
        slide6.addText("• " + t, { x: 8, y: 3.2 + i * 0.5, fontSize: 18 });
    });

    // --- SLIDE 07: PROPERTIES DISTRIBUTION ---
    const slide7 = pres.addSlide();
    slide7.addText("Real Estate Properties", { x: 1, y: 0.5, fontSize: 40, bold: true });
    slide7.addText("Local / Individual (70%)", { x: 1, y: 1.5, fontSize: 28, color: "2563EB", bold: true });
    slide7.addText("Residential homes, individual plots, villas.", { x: 1, y: 2.1, fontSize: 18, color: "475569" });
    slide7.addText("Commercial / Corporate (30%)", { x: 7, y: 1.5, fontSize: 28, color: "7C3AED", bold: true });
    slide7.addText("Office buildings, retail, industrial.", { x: 7, y: 2.1, fontSize: 18, color: "475569" });
    slide7.addShape(pres.ShapeType.rect, { x: 3, y: 3.5, w: 7, h: 3, fill: { color: "F9FAFB" }, line: { color: "E5E7EB" } });
    slide7.addText("[Market Segmentation Pie Chart]", { x: 3, y: 4.8, w: 7, align: "center", color: "9CA3AF" });

    // --- SLIDE 08: ECOSYSTEM CORE ---
    const slide8 = pres.addSlide();
    slide8.background = { color: "312E81" };
    slide8.addText("Wealth Associates Ecosystem", { x: 0, y: 0.8, w: "100%", align: "center", fontSize: 44, color: "FFFFFF", bold: true });
    slide8.addText("CREATE • IMPROVE • PROTECT", { x: 0, y: 2, w: "100%", align: "center", fontSize: 32, color: "FCD34D", bold: true });
    const waTasks = ["Land Acquisition", "Project Designing", "Marketing Execution"];
    waTasks.forEach((task, i) => {
        slide8.addShape(pres.ShapeType.rect, { x: 1 + i * 4, y: 3.5, w: 3, h: 2, fill: { color: "FFFFFF", transparency: 85 } });
        slide8.addText(task, { x: 1 + i * 4, y: 4.3, w: 3, align: "center", fontSize: 24, color: "FFFFFF", bold: true });
    });

    // --- SLIDE 09: THE APP ---
    const slide9 = pres.addSlide();
    slide9.addText("Technology: The Wealth Associates App", { x: 1, y: 0.5, fontSize: 40, bold: true });
    slide9.addMedia({ type: "video", path: slidevideo, x: 2, y: 1.5, w: 9, h: 5 });

    // --- SLIDE 10: REGISTRATION ---
    const slide10 = pres.addSlide();
    slide10.addText("Easy Registration Process", { x: 1, y: 0.5, fontSize: 40, bold: true });
    slide10.addMedia({ type: "video", path: registervideo, x: 2, y: 1.5, w: 9, h: 5 });

    // --- SLIDE 11: DASHBOARD ---
    const slide11 = pres.addSlide();
    slide11.addText("Powerful User Dashboard", { x: 1, y: 0.5, fontSize: 40, bold: true });
    slide11.addMedia({ type: "video", path: dashboardvideo, x: 1, y: 1.5, w: 11, h: 5 });

    // --- SLIDE 12: POST & REQUEST ---
    const slide12 = pres.addSlide();
    slide12.addText("Post & Request Property", { x: 0, y: 0.5, w: "100%", align: "center", fontSize: 40, bold: true });
    slide12.addText("POST PROPERTY", { x: 1, y: 1.5, fontSize: 28, bold: true, color: "2563EB" });
    slide12.addText("1. Upload Details\n2. Set Pricing\n3. Publish", { x: 1, y: 2.2, fontSize: 20, lineSpacing: 28 });
    slide12.addText("REQUEST PROPERTY", { x: 7, y: 1.5, fontSize: 28, bold: true, color: "7C3AED" });
    slide12.addText("1. Specify Requirements\n2. Submit Request\n3. Get Matches", { x: 7, y: 2.2, fontSize: 20, lineSpacing: 28 });

    // --- SLIDE 13: PROPERTY TYPES ---
    const slide13 = pres.addSlide();
    slide13.addText("Property Types", { x: 0, y: 0.5, w: "100%", align: "center", fontSize: 40, bold: true });
    const pTypes = [
        { t: "Regular", s: "1-3 Days Approval", c: "3B82F6" },
        { t: "Approved", s: "Verified & Ready", c: "10B981" },
        { t: "Wealth", s: "Premium Listings", c: "8B5CF6" },
        { t: "Listed", s: "Active Marketplace", c: "F97316" }
    ];
    pTypes.forEach((p, i) => {
        const x = i < 2 ? 1.5 : 7;
        const y = (i % 2 === 0) ? 1.5 : 4;
        slide13.addShape(pres.ShapeType.rect, { x: x, y: y, w: 4.5, h: 2, fill: { color: p.c } });
        slide13.addText(p.t, { x: x, y: y + 0.3, w: 4.5, align: "center", color: "FFFFFF", fontSize: 28, bold: true });
        slide13.addText(p.s, { x: x, y: y + 1.2, w: 4.5, align: "center", color: "FFFFFF", fontSize: 18 });
    });

    // --- SLIDE 14: ECOSYSTEM NETWORK ---
    const slide14 = pres.addSlide();
    slide14.background = { color: "312E81" };
    slide14.addText("Ecosystem Network", { x: 0, y: 0.5, w: "100%", align: "center", fontSize: 44, color: "FFFFFF", bold: true });
    slide14.addShape(pres.ShapeType.ellipse, { x: 5, y: 2.5, w: 3, h: 3, fill: { color: "F59E0B" } });
    slide14.addText("Wealth\nAssociates", { x: 5, y: 3.2, w: 3, align: "center", fontSize: 22, color: "FFFFFF", bold: true });
    const nodes = [
        { n: "Kriya IT Tools", p: "TOP", x: 5, y: 1 },
        { n: "Real Properties", p: "LEFT", x: 1.5, y: 3 },
        { n: "Digitally Yours", p: "BOTTOM", x: 5, y: 5.5 },
        { n: "Lokal Buddy", p: "RIGHT", x: 9.5, y: 3 }
    ];
    nodes.forEach(node => {
        slide14.addShape(pres.ShapeType.rect, { x: node.x, y: node.y, w: 2.5, h: 1, fill: { color: "FFFFFF", transparency: 85 }, rounding: true });
        slide14.addText(node.n, { x: node.x, y: node.y + 0.3, w: 2.5, align: "center", fontSize: 16, bold: true, color: "FFFFFF" });
    });

    // --- SLIDE 15: REAL PROPERTIES ---
    const slide15 = pres.addSlide();
    slide15.background = { color: "F0FDFA" };
    slide15.addText("RealProperties Website", { x: 1, y: 0.5, fontSize: 40, bold: true });
    slide15.addText("Property Listing Platform • Lead Generation • Wide Reach", { x: 1, y: 1.2, fontSize: 20, color: "475569" });
    slide15.addShape(pres.ShapeType.rect, { x: 7, y: 1.8, w: 4, h: 4.5, fill: { color: "FFFFFF" }, shadow: { type: "outer" } });
    slide15.addText("Paid Upload", { x: 7, y: 2.2, w: 4, align: "center", fontSize: 32, bold: true, color: "0F172A" });
    slide15.addText("₹3,650 / year", { x: 7, y: 3.2, w: 4, align: "center", fontSize: 36, color: "F97316", bold: true });
    slide15.addText("• Unlimited property uploads\n• Premium placement\n• Lead notifications\n• 24/7 support", { x: 7.5, y: 4.2, w: 3, fontSize: 16, lineSpacing: 24 });

    // --- SLIDE 16: SKILLED RESOURCES ---
    const slide16 = pres.addSlide();
    slide16.addText("Skilled Resources", { x: 1, y: 0.5, fontSize: 40, bold: true });
    slide16.addText("Access the best expertise for your development.", { x: 1, y: 1.2, fontSize: 20 });
    slide16.addImage({ path: expertImg, x: 2.5, y: 1.8, w: 8, h: 4.5 });

    // --- SLIDE 17: LOKAL BUDDY ---
    const slide17 = pres.addSlide();
    slide17.background = { color: "FDF2F8" };
    slide17.addText("LokalBuddy Platform", { x: 0, y: 0.5, w: "100%", align: "center", fontSize: 44, bold: true });
    const plans = [
        { t: "App Users", p: "FREE", c: "FFFFFF", tc: "059669" },
        { t: "Verification", p: "₹499/y", c: "DB2777", tc: "FFFFFF" },
        { t: "Pay to View", p: "Access", c: "FFFFFF", tc: "2563EB" }
    ];
    plans.forEach((p, i) => {
        slide17.addShape(pres.ShapeType.rect, { x: 1 + i * 4, y: 1.8, w: 3, h: 3.5, fill: { color: p.c }, line: { color: "E5E7EB" } });
        slide17.addText(p.t, { x: 1 + i * 4, y: 2.2, w: 3, align: "center", fontSize: 22, bold: true, color: (p.tc === "FFFFFF" ? "FFFFFF" : "334155") });
        slide17.addText(p.p, { x: 1 + i * 4, y: 3.2, w: 3, align: "center", fontSize: 36, bold: true, color: p.tc });
    });

    // --- SLIDE 18: REGIONAL PRESENCE ---
    const slide18 = pres.addSlide();
    slide18.addText("Regional Presence: Andhra Pradesh", { x: 1, y: 0.5, fontSize: 40, bold: true });
    slide18.addImage({ path: districtsImg, x: 2, y: 1.2, w: 9, h: 5.5 });

    // --- SLIDE 19: REAL SALE APPLICATION ---
    const slide19 = pres.addSlide();
    slide19.background = { color: "164E63" };
    slide19.addText("Real Sale Application", { x: 0, y: 0.5, w: "100%", align: "center", fontSize: 44, color: "FFFFFF", bold: true });
    slide19.addShape(pres.ShapeType.rect, { x: 1, y: 2, w: 5, h: 4, fill: { color: "FFFFFF", transparency: 90 } });
    slide19.addText("Subscription: ₹10,000 / year", { x: 1, y: 2.5, w: 5, align: "center", fontSize: 24, bold: true, color: "0E7490" });
    slide19.addText("Per Square Yard After sale: ₹4", { x: 1, y: 4, w: 5, align: "center", fontSize: 22, color: "0891B2" });
    slide19.addText("Features: 2D Layouts, 3D Viz, Booking System, Agreements, Registration.", { x: 7, y: 2, w: 5, fontSize: 20, color: "CFFAFE", lineSpacing: 32 });

    // --- SLIDE 20: FRANCHISE MODEL ---
    const slide20 = pres.addSlide();
    slide20.addText("Franchise Model", { x: 0, y: 0.5, w: "100%", align: "center", fontSize: 40, bold: true });
    slide20.addText("Regional Associate", { x: 1, y: 1.5, fontSize: 28, bold: true, color: "2563EB" });
    slide20.addText("Deposit: ₹2 Lakh\n- Covers 13 Districts\n- Exclusive Rights\n- Staff Required", { x: 1, y: 2.3, fontSize: 18, lineSpacing: 28 });
    slide20.addText("Channel Partner", { x: 7, y: 1.5, fontSize: 28, bold: true, color: "7C3AED" });
    slide20.addText("Deposit: ₹1 Lakh\n- Local Focus\n- Commission Based\n- Training Provided", { x: 7, y: 2.3, fontSize: 18, lineSpacing: 28 });

    // --- SLIDE 21: DIGITALLY YOURS ---
    const slide21 = pres.addSlide();
    slide21.background = { color: "0F172A" };
    slide21.addText("Digitally Yours: Marketing Plans", { x: 0.5, y: 0.5, fontSize: 36, bold: true, color: "FFFFFF" });
    const digitalPlans = ["Silver: ₹7,999", "Gold: ₹15,999", "Platinum: ₹24,999"];
    digitalPlans.forEach((plan, i) => {
        slide21.addShape(pres.ShapeType.rect, { x: 0.5 + i * 4.2, y: 1.5, w: 3.8, h: 4, fill: { color: "FFFFFF" }, line: { color: "E2E8F0" } });
        slide21.addText(plan, { x: 0.5 + i * 4.2, y: 2, w: 3.8, align: "center", fontSize: 24, bold: true, color: "1E293B" });
    });

    // --- SLIDE 22: CLOSING ---
    const slide22 = pres.addSlide();
    slide22.background = { color: "020617" };
    slide22.addImage({ path: kriyaLogo, x: 5.75, y: 1.5, w: 1.5, h: 1.5 });
    slide22.addText("Thank You!", { x: 0, y: 3.5, w: "100%", align: "center", fontSize: 60, color: "FFFFFF", bold: true });
    slide22.addText("Kriya IT Solutions - Technology Partner", { x: 0, y: 4.8, w: "100%", align: "center", fontSize: 24, color: "94A3B8" });
    slide22.addText("kriyaitsolutions.com | +91 7796356789", { x: 0, y: 5.8, w: "100%", align: "center", fontSize: 18, color: "64748B" });

    // --- FINAL EXPORT ---
    await pres.writeFile({ fileName: "Wealth_Associates_Complete_Presentation.pptx" });
};
