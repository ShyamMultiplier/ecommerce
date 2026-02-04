const products = [
    // --- BOOKS (10 items) ---
    { name: "S. Chand: Engineering Mathematics by HK Dass", description: "The definitive guide for B.Tech first-year students.", count: 40, price: 750, category: "Books", images: [{ path: "/images/books/maths.png" }], attrs: [{ key: "Publisher", value: "S. Chand" }] },
    { name: "Arihant: GATE 2026 CS & IT", description: "Complete syllabus coverage with previous year solved papers.", count: 30, price: 899, category: "Books", images: [{ path: "/images/books/arihant.png" }], attrs: [{ key: "Exam", value: "GATE" }] },
    { name: "Laxmi Publications: Python Programming", description: "Easy-to-follow coding guide for BCA and BSc students.", count: 25, price: 450, category: "Books", images: [{ path: "/images/books/python.png" }] },
    { name: "RD Sharma Class 12 Math", description: "Foundational reference for engineering entrance preparation.", count: 50, price: 600, category: "Books", images: [{ path: "/images/books/rdsharma.png" }] },
    { name: "McGraw Hill: Indian Polity by Laxmikanth", description: "Standard reference for UPSC and Law students.", count: 15, price: 820, category: "Books", images: [{ path: "/images/books/polity.png" }] },
    { name: "Oxford English Communication", description: "Essential for professional communication and lab courses.", count: 45, price: 290, category: "Books", images: [{ path: "/images/books/comm.png" }] },
    { name: "PHI: Algorithms Design & Analysis", description: "Core technical book for software engineering majors.", count: 12, price: 540, category: "Books", images: [{ path: "/images/books/algo.png" }] },
    { name: "Pearson: Database Systems", description: "The Korth edition used in IT degree programs.", count: 20, price: 950, category: "Books", images: [{ path: "/images/books/dbms.png" }] },
    { name: "VK Global: Statistics for Economics", description: "Essential textbook for B.Com and Economics students.", count: 30, price: 380, category: "Books", images: [{ path: "/images/books/stats.png" }] },
    { name: "Gullybaba: IGNOU Solved Help Guide", description: "Quick exam preparation for distance learners.", count: 100, price: 200, category: "Books", images: [{ path: "/images/books/ignou.png" }] },

    // --- LAPTOPS (10 items) ---
    { name: "Asus Vivobook Go 14", description: "Lightweight and affordable for daily college assignments.", count: 12, price: 34990, category: "Laptops", images: [{ path: "/images/laptops/vivobook.png" }], attrs: [{ key: "RAM", value: "8GB" }] },
    { name: "Lenovo IdeaPad Slim 3", description: "Reliable 15.6 inch student laptop for multitasking.", count: 10, price: 38500, category: "Laptops", images: [{ path: "/images/laptops/ideapad.png" }], attrs: [{ key: "Processor", value: "i3 12th Gen" }] },
    { name: "HP 15s Ryzen 3", description: "Excellent battery life for long library sessions.", count: 15, price: 41000, category: "Laptops", images: [{ path: "/images/laptops/hp15s.png" }] },
    { name: "Acer Aspire 5 Gaming", description: "Entry-level gaming for engineering and design students.", count: 8, price: 54990, category: "Laptops", images: [{ path: "/images/laptops/aspire.png" }], attrs: [{ key: "GPU", value: "RTX 2050" }] },
    { name: "Dell Inspiron 3520", description: "Durable build quality and trusted student support.", count: 10, price: 43000, category: "Laptops", images: [{ path: "/images/laptops/dell.png" }] },
    { name: "Samsung Galaxy Book3 Go", description: "Ultra-slim with high-quality display for media projects.", count: 7, price: 32990, category: "Laptops", images: [{ path: "/images/laptops/samsung.png" }] },
    { name: "Realme Book Slim", description: "MacBook-like aesthetic with a premium 2K screen.", count: 5, price: 39999, category: "Laptops", images: [{ path: "/images/laptops/realme.png" }] },
    { name: "MSI Modern 14", description: "Extremely portable at 1.4kg, perfect for travel.", count: 9, price: 36000, category: "Laptops", images: [{ path: "/images/laptops/msi.png" }] },
    { name: "Xiaomi Notebook Pro 120", description: "High performance with 120Hz display for tech enthusiasts.", count: 4, price: 62000, category: "Laptops", images: [{ path: "/images/laptops/mi.png" }] },
    { name: "Infinix INBook X2 Plus", description: "Powerful specs at the most competitive price point.", count: 20, price: 27990, category: "Laptops", images: [{ path: "/images/laptops/infinix.png" }] },

    // --- KETTLES (10 items) ---
    { name: "Prestige PKOSS 1.5L", description: "Hostel staple for boiling water and making Maggi.", count: 100, price: 795, category: "Kettles", images: [{ path: "/images/kettles/prestige.png" }], attrs: [{ key: "Material", value: "Stainless Steel" }] },
    { name: "Pigeon Amaze Plus", description: "Quick boiling and ultra-affordable for student budgets.", count: 150, price: 625, category: "Kettles", images: [{ path: "/images/kettles/pigeon.png" }] },
    { name: "Bajaj Majesty KTX 1.8", description: "Large 1.8L capacity for shared dorm rooms.", count: 40, price: 999, category: "Kettles", images: [{ path: "/images/kettles/bajaj.png" }] },
    { name: "Havells Aqua Plus", description: "Double-walled cool-touch body for extra safety.", count: 30, price: 1450, category: "Kettles", images: [{ path: "/images/kettles/havells.png" }] },
    { name: "Milton Premium Kettle", description: "Sleek black design that fits modern PG decor.", count: 25, price: 1300, category: "Kettles", images: [{ path: "/images/kettles/milton.png" }] },
    { name: "Butterfly E-Kettle", description: "Rugged and simple for daily intensive use.", count: 60, price: 699, category: "Kettles", images: [{ path: "/images/kettles/butterfly.png" }] },
    { name: "Cello Electric Kettle", description: "Compact 1L size ideal for small desks.", count: 35, price: 850, category: "Kettles", images: [{ path: "/images/kettles/cello.png" }] },
    { name: "Kent 16023 Glass", description: "Visual glass body with blue LED indicator.", count: 15, price: 1550, category: "Kettles", images: [{ path: "/images/kettles/kent.png" }] },
    { name: "Borosil DigiKettle", description: "Digital temperature presets for various tea types.", count: 10, price: 2800, category: "Kettles", images: [{ path: "/images/kettles/borosil.png" }] },
    { name: "Inalsa PRISM 1.8L", description: "High power for near-instant boiling.", count: 20, price: 999, category: "Kettles", images: [{ path: "/images/kettles/inalsa.png" }] },

    // --- COOLERS (10 items) ---
    { name: "Symphony Diet 12T", description: "Sleek tower cooler designed for narrow spaces.", count: 20, price: 6500, category: "Coolers", images: [{ path: "/images/coolers/symphony.png" }], attrs: [{ key: "Type", value: "Tower" }] },
    { name: "Bajaj PX 97 Torque", description: "Personal cooler with powerful air throw for hot summers.", count: 25, price: 6200, category: "Coolers", images: [{ path: "/images/coolers/bajaj_c.png" }] },
    { name: "Crompton Ozone 75", description: "Heavy-duty desert cooler for large common rooms.", count: 12, price: 9900, category: "Coolers", images: [{ path: "/images/coolers/crompton.png" }] },
    { name: "Orient Electric Smartcool", description: "Inverter compatible for uninterrupted sleep during power cuts.", count: 15, price: 7400, category: "Coolers", images: [{ path: "/images/coolers/orient.png" }] },
    { name: "Usha Azzura", description: "Budget-friendly personal air cooler.", count: 18, price: 5800, category: "Coolers", images: [{ path: "/images/coolers/usha.png" }] },
    { name: "Voltas JetMax 70", description: "High-speed cooling for extreme Indian heat.", count: 10, price: 10500, category: "Coolers", images: [{ path: "/images/coolers/voltas.png" }] },
    { name: "Kenstar Little DX", description: "Compact and portable bedside cooling.", count: 22, price: 5200, category: "Coolers", images: [{ path: "/images/coolers/kenstar.png" }] },
    { name: "Hindware Snowcrest", description: "Includes an ice chamber for extra cold airflow.", count: 14, price: 8300, category: "Coolers", images: [{ path: "/images/coolers/hindware.png" }] },
    { name: "Havells Freddo", description: "Premium tower cooler with full remote control.", count: 8, price: 12000, category: "Coolers", images: [{ path: "/images/coolers/havells_c.png" }] },
    { name: "Blue Star Personal", description: "Blower-based high-quality airflow.", count: 6, price: 7800, category: "Coolers", images: [{ path: "/images/coolers/bluestar.png" }] },

    // --- BICYCLES (10 items) ---
    { name: "Hero Jet Gold 26T", description: "Indestructible classic roadster for rugged campus use.", count: 30, price: 4800, category: "Bicycles", images: [{ path: "/images/bicycles/hero_jet.png" }] },
    { name: "Hercules Roadeo A200", description: "Sporty 21-speed geared bike for active students.", count: 15, price: 11500, category: "Bicycles", images: [{ path: "/images/bicycles/roadeo.png" }], attrs: [{ key: "Gears", value: "21" }] },
    { name: "Firefox Rapide 21S", description: "Lightweight hybrid for fast city and campus travel.", count: 8, price: 18500, category: "Bicycles", images: [{ path: "/images/bicycles/firefox.png" }] },
    { name: "Avon Elements 26T", description: "Modern MTB design with front suspension.", count: 20, price: 7500, category: "Bicycles", images: [{ path: "/images/bicycles/avon.png" }] },
    { name: "Mach City IBike", description: "Low maintenance single-speed hybrid commuter.", count: 18, price: 9200, category: "Bicycles", images: [{ path: "/images/bicycles/machcity.png" }] },
    { name: "Atlas Ultimate", description: "Trusted traditional bike for daily travel.", count: 25, price: 5800, category: "Bicycles", images: [{ path: "/images/bicycles/atlas.png" }] },
    { name: "Montra Madrock", description: "High-end entry level mountain bike.", count: 5, price: 16000, category: "Bicycles", images: [{ path: "/images/bicycles/montra.png" }] },
    { name: "91 Leopard", description: "Aggressive fat-tire look for style and performance.", count: 10, price: 13500, category: "Bicycles", images: [{ path: "/images/bicycles/ninetyone.png" }] },
    { name: "BSA Ladybird", description: "Comfortable step-through bike with front basket.", count: 12, price: 6800, category: "Bicycles", images: [{ path: "/images/bicycles/bsa.png" }] },
    { name: "Leader Scout 26T", description: "Affordable geared bike for value-seeking students.", count: 40, price: 6500, category: "Bicycles", images: [{ path: "/images/bicycles/leader.png" }] }
];

module.exports = products;