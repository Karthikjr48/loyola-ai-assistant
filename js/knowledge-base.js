// ============================================================
// Loyola AI Assistant - Knowledge Base
// ============================================================
// Comprehensive Q&A knowledge base for Loyola College, Chennai.
// Contains 60+ entries across 13 categories covering all aspects
// of the institution. All information sourced from loyolacollege.edu.
// ============================================================

const KNOWLEDGE_BASE = {
    categories: {

        // ════════════════════════════════════════════════════════
        // ABOUT LOYOLA COLLEGE
        // ════════════════════════════════════════════════════════
        about: {
            keywords: ['about', 'loyola', 'history', 'founded', 'college', 'institution', 'overview', 'introduction', 'background', 'establishment'],
            entries: [
                {
                    question: 'What is Loyola College, Chennai?',
                    answer: 'Loyola College is a prestigious Catholic Minority Institution founded in 1925 by the Society of Jesus (Jesuits). Located at Sterling Road, Nungambakkam, Chennai-600034, it is affiliated to the University of Madras and holds NAAC A++ accreditation with Autonomous status. The college motto is "Let Your Light Shine" and it is consistently ranked among the top colleges in India by NIRF, India Today, and The Week. Visit the official website at https://www.loyolacollege.edu for more details.',
                    keywords: ['what', 'loyola', 'college', 'about', 'introduction', 'overview', 'chennai']
                },
                {
                    question: 'When was Loyola College founded?',
                    answer: 'Loyola College was founded in 1925 by the Society of Jesus (Jesuits), making it one of the oldest and most prestigious educational institutions in South India. The college celebrated its centenary (100 years) recently, marking a century of academic excellence and Jesuit education. Learn more about the history at https://www.loyolacollege.edu/about-us.',
                    keywords: ['when', 'founded', 'established', 'year', 'history', 'started', 'origin', 'centenary', '1925', '100']
                },
                {
                    question: 'Who founded Loyola College?',
                    answer: 'Loyola College was founded by the Society of Jesus (Jesuits), a Catholic religious order known worldwide for their commitment to education and intellectual excellence. The Jesuits have been instrumental in establishing some of the finest educational institutions across the globe. The college remains a Catholic Minority Institution under the Jesuit administration. More at https://www.loyolacollege.edu/about-us.',
                    keywords: ['who', 'founded', 'founder', 'jesuits', 'society', 'jesus', 'catholic']
                },
                {
                    question: 'Where is Loyola College located?',
                    answer: 'Loyola College is located at Sterling Road, Nungambakkam, Chennai-600034, Tamil Nadu, India. The campus is centrally situated in the heart of Chennai, easily accessible by public transport. The postal address is: Loyola College, PB 3301, 01, Sterling Road, Nungambakkam, Chennai-600034. Directions and campus map are available at https://www.loyolacollege.edu/contact-us.',
                    keywords: ['where', 'location', 'located', 'address', 'campus', 'sterling', 'road', 'nungambakkam', 'chennai', 'directions']
                },
                {
                    question: 'What is the motto of Loyola College?',
                    answer: 'The motto of Loyola College is "Let Your Light Shine." This inspiring motto reflects the Jesuit educational philosophy of empowering students to achieve their fullest potential and contribute positively to society. It embodies the values of knowledge, service, and excellence that the college upholds.',
                    keywords: ['motto', 'tagline', 'slogan', 'light', 'shine']
                },
                {
                    question: 'Who is the Principal of Loyola College?',
                    answer: 'The current Principal of Loyola College is Rev. Dr. A. Louis Arockiaraj SJ. Under his leadership, the college continues to maintain its tradition of academic excellence and holistic development. The Secretary is Rev. Dr. D. Thomas Alexander SJ, and the Rector is Rev. Dr. Antony Robinson SJ. For more about the administration, visit https://www.loyolacollege.edu/about-us.',
                    keywords: ['principal', 'head', 'leader', 'administration', 'rector', 'secretary', 'louis', 'arockiaraj', 'thomas', 'alexander', 'antony', 'robinson']
                },
                {
                    question: 'What is the NAAC accreditation of Loyola College?',
                    answer: 'Loyola College has been accredited with the prestigious A++ Grade by the National Assessment and Accreditation Council (NAAC), which is the highest grade awarded. This accreditation reflects the college\'s outstanding quality in teaching, research, infrastructure, and governance. The college also holds Autonomous status, granting it the freedom to design its own curriculum and conduct examinations.',
                    keywords: ['naac', 'accreditation', 'grade', 'ranking', 'rating', 'autonomous', 'status', 'a++']
                },
                {
                    question: 'What is the affiliation of Loyola College?',
                    answer: 'Loyola College is affiliated to the University of Madras, one of India\'s oldest and most respected universities. As an Autonomous institution, the college has the privilege of designing its own syllabi, conducting examinations, and awarding degrees through the University of Madras. Details at https://www.loyolacollege.edu/about-us.',
                    keywords: ['affiliation', 'affiliated', 'university', 'madras', 'autonomous']
                },
                {
                    question: 'What are the sister institutions on the Loyola campus?',
                    answer: 'The Loyola campus in Chennai houses several sister institutions run by the Jesuits: LICET (Loyola-ICAM College of Engineering and Technology) offering engineering programs, LIBA (Loyola Institute of Business Administration) offering MBA programs, and LCE (Loyola College of Education) for B.Ed. programs. Together, they form a comprehensive educational hub. Visit https://www.licet.ac.in, https://www.liba.edu, and https://www.loyolacollege.edu for details.',
                    keywords: ['sister', 'institutions', 'licet', 'liba', 'lce', 'engineering', 'business', 'education', 'campus']
                },
                {
                    question: 'What rankings does Loyola College hold?',
                    answer: 'Loyola College is consistently ranked among the top colleges in India. It has been recognized by NIRF (National Institutional Ranking Framework) as one of the best colleges nationwide. It also features prominently in rankings by India Today and The Week magazines. The NAAC A++ accreditation further cements its position as a premier institution. Check the latest rankings at https://www.loyolacollege.edu.',
                    keywords: ['ranking', 'rank', 'nirf', 'india', 'today', 'week', 'top', 'best', 'rated']
                }
            ]
        },

        // ════════════════════════════════════════════════════════
        // ADMISSIONS
        // ════════════════════════════════════════════════════════
        admissions: {
            keywords: ['admission', 'admissions', 'apply', 'application', 'enroll', 'enrollment', 'join', 'register', 'registration', 'prospectus'],
            entries: [
                {
                    question: 'How do I apply for admission to Loyola College?',
                    answer: 'Admission to Loyola College is through an online application process. You can apply at the official admissions portal: https://admission.loyolacollege.edu/lccadmission/. The college offers both UG (undergraduate) and PG (postgraduate) programs across various disciplines. Make sure to check the prospectus for eligibility criteria and important dates.',
                    keywords: ['how', 'apply', 'admission', 'application', 'process', 'online', 'join', 'register', 'enroll']
                },
                {
                    question: 'What is the admission portal URL?',
                    answer: 'The official Loyola College admissions portal is available at https://admission.loyolacollege.edu/lccadmission/. Through this portal, you can fill out the application form, upload required documents, and track your application status. For hostel admission, there are separate portals for men and women.',
                    keywords: ['portal', 'url', 'website', 'link', 'online', 'admission', 'apply']
                },
                {
                    question: 'When does the admission process start?',
                    answer: 'The admission process for Loyola College typically begins in the months of April-May each year for the upcoming academic session. The Prospectus 2026-2027 is now available on the official website. Keep checking https://admission.loyolacollege.edu/lccadmission/ and the main website https://www.loyolacollege.edu for announcements regarding admission dates, deadlines, and instructions.',
                    keywords: ['when', 'start', 'begin', 'date', 'deadline', 'timeline', 'prospectus', '2026', '2027', 'schedule']
                },
                {
                    question: 'What UG programs are available for admission?',
                    answer: 'Loyola College offers a wide range of undergraduate (UG) programs across 10 Schools of Excellence including B.A., B.Sc., B.Com., BBA, and BMM degrees. Programs span Commerce, Sciences, Humanities, Languages, Media Studies, and more. Full details including eligibility and fee structure are available in the prospectus at https://www.loyolacollege.edu/admissions.',
                    keywords: ['ug', 'undergraduate', 'bachelor', 'ba', 'bsc', 'bcom', 'bba', 'programs', 'courses', 'available']
                },
                {
                    question: 'What PG programs are available for admission?',
                    answer: 'Loyola College offers several postgraduate (PG) programs including M.A., M.Sc., M.Com., and M.S.W. across various departments. PhD programs are also available under the University of Madras. Check the admissions portal at https://admission.loyolacollege.edu/lccadmission/ for PG-specific application forms and eligibility criteria.',
                    keywords: ['pg', 'postgraduate', 'master', 'ma', 'msc', 'mcom', 'msw', 'phd', 'doctoral', 'programs']
                },
                {
                    question: 'Are there diploma courses at Loyola College?',
                    answer: 'Yes, Loyola College offers diploma and certificate courses through LIVE (Loyola Institute of Vocational Education). These vocational courses are designed to provide practical skills and employability. LIVE programs include various certificate and diploma options. For details, visit https://www.loyolacollege.edu or contact the LIVE office.',
                    keywords: ['diploma', 'certificate', 'live', 'vocational', 'short', 'course', 'skill']
                },
                {
                    question: 'What are the different shifts available at Loyola College?',
                    answer: 'Loyola College operates in multiple shifts/streams to accommodate more students. The college typically has morning (Shift I) and evening (Shift II) streams for various programs. Not all programs are available in both shifts. Please refer to the prospectus and admission portal at https://admission.loyolacollege.edu/lccadmission/ for shift-specific availability and details.',
                    keywords: ['shift', 'shifts', 'stream', 'morning', 'evening', 'timing', 'schedule']
                }
            ]
        },

        // ════════════════════════════════════════════════════════
        // COURSES & DEPARTMENTS
        // ════════════════════════════════════════════════════════
        courses: {
            keywords: ['course', 'courses', 'program', 'programs', 'department', 'departments', 'degree', 'subject', 'study', 'school', 'stream', 'major'],
            entries: [
                {
                    question: 'What are the Schools of Excellence at Loyola College?',
                    answer: 'Loyola College has 10 Schools of Excellence: (1) Commerce & Economics, (2) Computational Sciences, (3) Human Excellence, (4) Humanities & Social Sciences, (5) Languages, (6) Life Sciences, (7) Media Studies, (8) Physical Education, (9) Physical Sciences, and (10) Service Learning. Each school encompasses multiple departments offering UG and PG programs. Details at https://www.loyolacollege.edu/schools.',
                    keywords: ['schools', 'excellence', 'departments', 'all', 'list', 'how', 'many', 'faculties']
                },
                {
                    question: 'What courses are offered under Commerce & Economics?',
                    answer: 'The School of Commerce & Economics at Loyola College offers: BBA (Bachelor of Business Administration), B.Com (Accounting & Finance), B.Com (Computer Applications), B.Com (Corporate Secretaryship), B.Com (Honours), Commerce, and Economics. These programs are designed to build strong foundations in business, finance, and economic theory. Visit https://www.loyolacollege.edu/schools for detailed syllabi.',
                    keywords: ['commerce', 'economics', 'bba', 'bcom', 'business', 'finance', 'accounting', 'corporate', 'secretaryship', 'honours']
                },
                {
                    question: 'What courses are offered under Computational Sciences?',
                    answer: 'The School of Computational Sciences offers programs in Computer Science, Data Science, Mathematics, and Statistics. These departments provide cutting-edge education in computing, analytics, and mathematical sciences with excellent lab facilities. Programs include both UG and PG levels. More information at https://www.loyolacollege.edu/schools.',
                    keywords: ['computational', 'computer', 'science', 'data', 'mathematics', 'statistics', 'computing', 'programming', 'it', 'tech']
                },
                {
                    question: 'What courses are offered under Humanities & Social Sciences?',
                    answer: 'The School of Humanities & Social Sciences offers programs in Counselling Psychology, History, International Relations, Philosophy, Sociology, and Social Work. These disciplines focus on understanding human behavior, society, and global affairs. Both UG and PG programs are available, including M.S.W. (Master of Social Work). Details at https://www.loyolacollege.edu/schools.',
                    keywords: ['humanities', 'social', 'sciences', 'psychology', 'history', 'international', 'relations', 'philosophy', 'sociology', 'social', 'work', 'counselling']
                },
                {
                    question: 'What language courses are offered at Loyola College?',
                    answer: 'The School of Languages at Loyola College offers programs in English, French, Hindi, Sanskrit, and Tamil. These departments focus on literature, linguistics, and communication skills. The English department is particularly renowned. French programs include opportunities for semester exchange with French and Belgian universities. Visit https://www.loyolacollege.edu/schools for more.',
                    keywords: ['language', 'languages', 'english', 'french', 'hindi', 'sanskrit', 'tamil', 'literature', 'linguistics']
                },
                {
                    question: 'What courses are offered under Life Sciences?',
                    answer: 'The School of Life Sciences offers programs in Advanced Zoology & Biotechnology and Plant Biology & Plant Biotechnology. These departments have well-equipped laboratories and research facilities for studying biological sciences. Both UG and PG programs with research opportunities are available. Details at https://www.loyolacollege.edu/schools.',
                    keywords: ['life', 'sciences', 'zoology', 'biotechnology', 'plant', 'biology', 'botany', 'bio']
                },
                {
                    question: 'What courses are offered under Media Studies?',
                    answer: 'The School of Media Studies offers BMM (Bachelor of Mass Media), Digital Journalism & 3D Animation, and Visual Communication. These programs prepare students for careers in journalism, advertising, filmmaking, digital media, and creative communication. The department has modern studios and editing facilities. More at https://www.loyolacollege.edu/schools.',
                    keywords: ['media', 'studies', 'bmm', 'journalism', 'animation', 'visual', 'communication', 'mass', 'digital', 'film']
                },
                {
                    question: 'What courses are offered under Physical Sciences?',
                    answer: 'The School of Physical Sciences offers programs in Chemistry, Food Chemistry & Food Processing, and Physics. These departments have state-of-the-art laboratories and research facilities. Students can pursue UG, PG, and PhD programs in these disciplines. Visit https://www.loyolacollege.edu/schools for curriculum details.',
                    keywords: ['physical', 'sciences', 'chemistry', 'food', 'physics', 'lab', 'laboratory']
                },
                {
                    question: 'Does Loyola College offer PhD programs?',
                    answer: 'Yes, Loyola College offers PhD programs in various disciplines under the affiliation of the University of Madras. Research scholars can pursue doctoral studies in departments across the Sciences, Humanities, and Commerce streams. The college has dedicated research units and guides to support PhD candidates. Contact the respective department or visit https://www.loyolacollege.edu/research for details.',
                    keywords: ['phd', 'doctoral', 'research', 'degree', 'doctor', 'philosophy']
                },
                {
                    question: 'What is the School of Human Excellence?',
                    answer: 'The School of Human Excellence at Loyola College focuses on holistic personality development, soft skills, ethics, and value-based education. It reflects the Jesuit tradition of forming the whole person — intellectually, morally, and spiritually. Programs under this school complement academic education with personal growth initiatives. Visit https://www.loyolacollege.edu/schools for more.',
                    keywords: ['human', 'excellence', 'personality', 'development', 'soft', 'skills', 'values', 'ethics', 'holistic']
                },
                {
                    question: 'What is the School of Service Learning?',
                    answer: 'The School of Service Learning at Loyola College integrates community service with academic learning. Students engage in social outreach programs, rural exposure, and community development projects as part of their academic curriculum. This reflects the Jesuit emphasis on being "men and women for others." Details at https://www.loyolacollege.edu/schools.',
                    keywords: ['service', 'learning', 'community', 'outreach', 'social', 'rural', 'nss', 'volunteer']
                },
                {
                    question: 'Does Loyola College have a Physical Education department?',
                    answer: 'Yes, the School of Physical Education at Loyola College promotes sports and physical fitness among students. The college has excellent sports infrastructure and encourages participation in inter-collegiate and university-level competitions. Physical Education courses and training are available for interested students. More at https://www.loyolacollege.edu/schools.',
                    keywords: ['physical', 'education', 'sports', 'fitness', 'athletic', 'games', 'exercise']
                }
            ]
        },

        // ════════════════════════════════════════════════════════
        // HOSTEL
        // ════════════════════════════════════════════════════════
        hostel: {
            keywords: ['hostel', 'accommodation', 'dorm', 'dormitory', 'stay', 'residence', 'room', 'boarding', 'lodging'],
            entries: [
                {
                    question: 'Does Loyola College have hostel facilities?',
                    answer: 'Yes, Loyola College provides hostel facilities for both men and women. The hostels offer a safe, comfortable, and conducive environment for students from outstation. Hostel admission is separate from college admission and has its own application process. For details, visit https://www.loyolacollege.edu.',
                    keywords: ['hostel', 'facility', 'available', 'accommodation', 'dorm', 'stay', 'residence']
                },
                {
                    question: 'How do I apply for hostel admission?',
                    answer: 'Hostel admission at Loyola College is through an online process. For men\'s hostel, apply at https://admission.loyolacollege.edu/hostelonline. For women\'s hostel, apply at the women\'s hostel portal (hostelonlinewomen). Note that hostel admission is separate from college admission, and seats are limited. Apply early to secure your spot.',
                    keywords: ['apply', 'hostel', 'admission', 'online', 'portal', 'register', 'how']
                },
                {
                    question: 'What is the men\'s hostel admission portal?',
                    answer: 'The men\'s hostel online admission portal for Loyola College is available at https://admission.loyolacollege.edu/hostelonline. Through this portal, you can submit your hostel application, upload documents, and check your admission status. Hostel seats are allotted based on availability and distance from Chennai.',
                    keywords: ['men', 'male', 'boys', 'hostel', 'portal', 'link', 'url', 'admission']
                },
                {
                    question: 'What is the women\'s hostel admission portal?',
                    answer: 'The women\'s hostel online admission portal for Loyola College is accessible via the hostelonlinewomen section at https://admission.loyolacollege.edu. Women applicants can complete their hostel registration through this dedicated portal. For specific queries regarding women\'s hostel facilities, contact the hostel administration office.',
                    keywords: ['women', 'female', 'girls', 'hostel', 'portal', 'link', 'url', 'admission', 'ladies']
                },
                {
                    question: 'What facilities are available in the hostel?',
                    answer: 'Loyola College hostels provide essential facilities including furnished rooms, mess/dining hall with nutritious meals, Wi-Fi connectivity, study rooms, recreational areas, and 24/7 security. The hostels also have wardens and a supportive staff to ensure students\' well-being. Specific amenities may vary between men\'s and women\'s hostels. Contact the hostel office for the latest details.',
                    keywords: ['facilities', 'amenities', 'food', 'mess', 'wifi', 'room', 'features', 'hostel']
                }
            ]
        },

        // ════════════════════════════════════════════════════════
        // PLACEMENTS
        // ════════════════════════════════════════════════════════
        placements: {
            keywords: ['placement', 'placements', 'job', 'jobs', 'career', 'recruit', 'recruitment', 'company', 'companies', 'hire', 'hiring', 'employ', 'employment'],
            entries: [
                {
                    question: 'Does Loyola College have a placement cell?',
                    answer: 'Yes, Loyola College has an active Training & Placement Cell that facilitates campus recruitment for students. The cell organizes placement drives, pre-placement training, mock interviews, resume-building workshops, and career counselling sessions. Top companies from various sectors visit the campus to recruit students. Visit https://www.loyolacollege.edu/placements for more information.',
                    keywords: ['placement', 'cell', 'training', 'campus', 'recruitment', 'office']
                },
                {
                    question: 'Which companies recruit from Loyola College?',
                    answer: 'Loyola College attracts recruiters from top companies across IT, finance, consulting, media, and other sectors. Major recruiters include leading MNCs and Indian corporates. The Training & Placement Cell maintains strong industry connections and organizes regular recruitment drives. For the latest placement statistics and recruiter list, visit https://www.loyolacollege.edu/placements.',
                    keywords: ['companies', 'which', 'recruiters', 'top', 'firms', 'mnc', 'corporate', 'list']
                },
                {
                    question: 'What is the placement record of Loyola College?',
                    answer: 'Loyola College has an excellent placement record with a significant percentage of eligible students being placed each year. Students receive competitive salary packages from reputed companies. The college\'s strong alumni network and industry connections contribute to consistent placement success. Detailed placement statistics are available at https://www.loyolacollege.edu/placements.',
                    keywords: ['record', 'statistics', 'percentage', 'salary', 'package', 'average', 'highest']
                },
                {
                    question: 'Does Loyola College offer pre-placement training?',
                    answer: 'Yes, the Training & Placement Cell provides comprehensive pre-placement training including aptitude test preparation, group discussion practice, personal interview coaching, communication skills development, and industry-specific training. These sessions are conducted by experienced trainers and industry professionals to ensure students are job-ready. More at https://www.loyolacollege.edu/placements.',
                    keywords: ['pre', 'placement', 'training', 'preparation', 'aptitude', 'interview', 'skills', 'coaching']
                },
                {
                    question: 'How can I register for campus placements?',
                    answer: 'Students can register for campus placements through the Training & Placement Cell at Loyola College. Registration typically opens for final-year students at the beginning of the academic year. You need to meet the eligibility criteria set by the placement cell and individual companies. Contact the Placement Officer or visit https://www.loyolacollege.edu/placements for registration details.',
                    keywords: ['register', 'sign', 'up', 'eligible', 'eligibility', 'criteria', 'how', 'join']
                }
            ]
        },

        // ════════════════════════════════════════════════════════
        // SCHOLARSHIPS & FINANCIAL AID
        // ════════════════════════════════════════════════════════
        scholarships: {
            keywords: ['scholarship', 'scholarships', 'financial', 'aid', 'fee', 'fees', 'concession', 'waiver', 'grant', 'fund', 'funding'],
            entries: [
                {
                    question: 'What scholarships are available at Loyola College?',
                    answer: 'Loyola College offers various scholarships and financial aid through the LSSS (Loyola Student Support Services) office. Available scholarships include: State Government Scholarships (for SC/ST/BC/MBC students), Fr. Kuriakose Scholarship Fund (for deserving students), Loyola Research Endowment Fund (for research scholars), and other merit-based and need-based scholarships. Contact the LSSS office for details or visit https://www.loyolacollege.edu.',
                    keywords: ['scholarships', 'available', 'types', 'list', 'what', 'financial', 'aid', 'support']
                },
                {
                    question: 'What is the LSSS office?',
                    answer: 'LSSS stands for Loyola Student Support Services. This office at Loyola College handles all scholarship-related matters, financial aid distribution, and student welfare programs. The LSSS office assists students in applying for government scholarships, college-specific scholarships, and other financial support. Contact the LSSS office during working hours for assistance.',
                    keywords: ['lsss', 'student', 'support', 'services', 'office', 'welfare']
                },
                {
                    question: 'How do I apply for government scholarships at Loyola College?',
                    answer: 'State Government Scholarships for SC/ST/BC/MBC students can be applied for through the LSSS office at Loyola College. Students need to submit relevant community certificates, income certificates, and academic records. The LSSS office guides students through the application process and helps with documentation. Visit the LSSS office early in the academic year or check https://www.loyolacollege.edu for announcements.',
                    keywords: ['government', 'state', 'apply', 'sc', 'st', 'bc', 'mbc', 'community', 'how']
                },
                {
                    question: 'What is the Fr. Kuriakose Scholarship Fund?',
                    answer: 'The Fr. Kuriakose Scholarship Fund is a scholarship program at Loyola College designed to support deserving and financially needy students. Named after a beloved Jesuit father, this fund provides financial assistance to help students continue their education without financial burden. Eligible students can apply through the LSSS office.',
                    keywords: ['kuriakose', 'scholarship', 'fund', 'father', 'fr', 'deserving', 'needy']
                },
                {
                    question: 'What is the Loyola Research Endowment Fund?',
                    answer: 'The Loyola Research Endowment Fund supports research scholars and faculty engaged in academic research at Loyola College. This fund provides financial support for research projects, conference participation, and publication expenses. Research scholars pursuing PhD and other research degrees can benefit from this fund. Contact the research office for eligibility and application details.',
                    keywords: ['research', 'endowment', 'fund', 'scholar', 'project', 'academic']
                },
                {
                    question: 'What are the fees at Loyola College?',
                    answer: 'Fee structures at Loyola College vary depending on the program (UG/PG), department, and student category. The detailed fee structure is published in the annual prospectus and is available at the admissions portal: https://admission.loyolacollege.edu/lccadmission/. For specific fee inquiries, you can contact the college office at +91-44-28178200 or email mail@loyolacollege.edu.',
                    keywords: ['fees', 'fee', 'cost', 'tuition', 'structure', 'amount', 'payment', 'charges', 'price', 'expensive']
                }
            ]
        },

        // ════════════════════════════════════════════════════════
        // EXAMINATIONS
        // ════════════════════════════════════════════════════════
        examinations: {
            keywords: ['exam', 'examination', 'exams', 'examinations', 'test', 'assessment', 'result', 'results', 'semester', 'marks'],
            entries: [
                {
                    question: 'What is the examination system at Loyola College?',
                    answer: 'Loyola College follows a semester system for examinations. As an Autonomous institution, the college designs its own syllabi and conducts internal and end-semester examinations. The academic year is divided into two semesters with continuous internal assessments and final examinations. Details about the examination system are available at https://www.loyolacollege.edu/examinations.',
                    keywords: ['system', 'pattern', 'semester', 'how', 'structure', 'format', 'autonomous']
                },
                {
                    question: 'How can I check my examination results?',
                    answer: 'Examination results at Loyola College are published online on the college website. Students can access their results by logging into the student portal or checking the results section at https://www.loyolacollege.edu/examinations. Results are typically published within a few weeks after the completion of end-semester examinations.',
                    keywords: ['results', 'check', 'online', 'marks', 'grade', 'score', 'view', 'access', 'published']
                },
                {
                    question: 'What are the pass requirements at Loyola College?',
                    answer: 'The pass requirements and grading criteria at Loyola College are outlined on the college website under the examinations section. As an autonomous institution, the college has its own grading system and minimum pass marks criteria. Students must meet both internal assessment and end-semester exam requirements. Visit https://www.loyolacollege.edu/examinations for detailed pass requirements and guidelines.',
                    keywords: ['pass', 'requirements', 'criteria', 'minimum', 'marks', 'grading', 'fail', 'passing']
                },
                {
                    question: 'Does Loyola College provide WES/IQAS verification?',
                    answer: 'Yes, Loyola College provides WES (World Education Services) and IQAS (International Qualifications Assessment Service) verification for students applying to universities abroad or for immigration purposes. The examination office handles these verification requests. Contact the Controller of Examinations office or visit https://www.loyolacollege.edu/examinations for the process and required documents.',
                    keywords: ['wes', 'iqas', 'verification', 'abroad', 'international', 'transcript', 'foreign', 'immigration']
                },
                {
                    question: 'Where can I find examination guidelines and FAQs?',
                    answer: 'Examination guidelines, frequently asked questions, and related information are published on the Loyola College website under the Examinations section at https://www.loyolacollege.edu/examinations. This includes information about exam schedules, hall tickets, revaluation procedures, supplementary exams, and other examination-related queries.',
                    keywords: ['guidelines', 'faq', 'frequently', 'asked', 'questions', 'information', 'schedule', 'hall', 'ticket']
                }
            ]
        },

        // ════════════════════════════════════════════════════════
        // CONTACT INFORMATION
        // ════════════════════════════════════════════════════════
        contact: {
            keywords: ['contact', 'phone', 'email', 'address', 'reach', 'call', 'office', 'hours', 'timing', 'help', 'support'],
            entries: [
                {
                    question: 'How can I contact Loyola College?',
                    answer: 'You can contact Loyola College through the following channels:\n📍 Address: Loyola College, PB 3301, 01, Sterling Road, Nungambakkam, Chennai-600034\n📞 Phone: +91-44-28178200\n📧 Email: mail@loyolacollege.edu\n🕐 Office Hours: Monday to Saturday, 9:00 AM to 5:00 PM\n🌐 Website: https://www.loyolacollege.edu\nVisit the contact page at https://www.loyolacollege.edu/contact-us for department-specific contact details.',
                    keywords: ['contact', 'how', 'reach', 'phone', 'email', 'address', 'number', 'call']
                },
                {
                    question: 'What is the phone number of Loyola College?',
                    answer: 'The main phone number of Loyola College, Chennai is +91-44-28178200. This is the general enquiry number that connects to the college office. For department-specific queries, you may be redirected to the concerned department. Office hours are Monday to Saturday, 9:00 AM to 5:00 PM.',
                    keywords: ['phone', 'number', 'telephone', 'call', 'landline', 'mobile']
                },
                {
                    question: 'What is the email address of Loyola College?',
                    answer: 'The official email address of Loyola College, Chennai is mail@loyolacollege.edu. You can write to this address for general enquiries about admissions, courses, examinations, and other college-related matters. For faster responses, mention your query subject clearly in the email subject line.',
                    keywords: ['email', 'mail', 'id', 'address', 'write', 'send']
                },
                {
                    question: 'What are the office hours of Loyola College?',
                    answer: 'The administrative office of Loyola College operates from Monday to Saturday, 9:00 AM to 5:00 PM. The college is closed on Sundays and public holidays. During examination periods and vacations, timings may vary. It is advisable to call ahead (+91-44-28178200) before visiting for specific queries.',
                    keywords: ['office', 'hours', 'timing', 'time', 'working', 'open', 'close', 'when', 'schedule']
                },
                {
                    question: 'What is the postal address of Loyola College?',
                    answer: 'The postal address of Loyola College is:\nLoyola College\nPB 3301, 01, Sterling Road\nNungambakkam\nChennai - 600034\nTamil Nadu, India\n\nThe campus is located in the heart of Chennai, easily accessible by public transport including metro, bus, and auto-rickshaw.',
                    keywords: ['postal', 'address', 'post', 'courier', 'send', 'letter', 'mail', 'pincode', 'pin', 'code', '600034']
                }
            ]
        },

        // ════════════════════════════════════════════════════════
        // FACILITIES
        // ════════════════════════════════════════════════════════
        facilities: {
            keywords: ['facility', 'facilities', 'infrastructure', 'library', 'lab', 'laboratory', 'sports', 'campus', 'amenities'],
            entries: [
                {
                    question: 'What facilities are available at Loyola College?',
                    answer: 'Loyola College offers world-class facilities including: Central Library with OPAC (Online Public Access Catalogue), well-equipped science and computer laboratories, sports grounds and gymnasium, an amphitheatre for cultural events, Campus Ministry for spiritual growth, Counselling Centre for student well-being, FM 107.4 (campus radio), EduTech centre, and a Research Park. Visit https://www.loyolacollege.edu for a full list.',
                    keywords: ['facilities', 'all', 'what', 'available', 'infrastructure', 'campus', 'amenities', 'list']
                },
                {
                    question: 'Tell me about the Central Library at Loyola College.',
                    answer: 'The Central Library at Loyola College is one of the finest academic libraries in Chennai. It houses a vast collection of books, journals, periodicals, and digital resources. The library features an OPAC (Online Public Access Catalogue) system for easy book searches, reading rooms, reference sections, and digital access terminals. It supports academic research and learning. Visit https://www.loyolacollege.edu/library for timings and catalogue access.',
                    keywords: ['library', 'central', 'books', 'opac', 'reading', 'journals', 'catalogue', 'digital']
                },
                {
                    question: 'What sports facilities does Loyola College have?',
                    answer: 'Loyola College has excellent sports facilities including grounds for cricket, football, basketball, volleyball, and athletics. The college has a gymnasium and promotes sports participation through inter-collegiate competitions and tournaments. The School of Physical Education oversees sports activities and training. Loyola students have represented at university, state, and national levels.',
                    keywords: ['sports', 'games', 'ground', 'gymnasium', 'cricket', 'football', 'basketball', 'athletic', 'fitness']
                },
                {
                    question: 'Does Loyola College have a campus radio station?',
                    answer: 'Yes, Loyola College operates FM 107.4, a community radio station run from the campus. It broadcasts educational content, campus news, cultural programs, and community-oriented content. The radio station provides hands-on experience for students interested in media and broadcasting, particularly those from the Media Studies department.',
                    keywords: ['radio', 'fm', '107.4', 'broadcast', 'station', 'community', 'media']
                },
                {
                    question: 'What is the Amphitheatre at Loyola College?',
                    answer: 'The Amphitheatre at Loyola College is an open-air venue used for cultural events, performances, seminars, and large gatherings. It serves as a vibrant space for student activities, inter-collegiate cultural festivals, and college celebrations. The amphitheatre is one of the iconic landmarks of the Loyola campus.',
                    keywords: ['amphitheatre', 'auditorium', 'hall', 'venue', 'event', 'cultural', 'stage', 'performance']
                },
                {
                    question: 'Does Loyola College have a counselling centre?',
                    answer: 'Yes, Loyola College has a dedicated Counselling Centre that provides professional counselling services to students. The centre offers personal counselling, career guidance, and psychological support. Trained counsellors help students deal with academic stress, personal issues, and mental health concerns. The service is confidential and free for all enrolled students.',
                    keywords: ['counselling', 'counseling', 'centre', 'center', 'mental', 'health', 'support', 'guidance', 'psychology', 'stress']
                },
                {
                    question: 'What is the EduTech centre at Loyola College?',
                    answer: 'The EduTech centre at Loyola College focuses on integrating technology with education. It provides digital learning tools, multimedia resources, and technology-enhanced teaching support. The centre helps faculty adopt modern pedagogical methods and provides students access to digital learning platforms and e-resources.',
                    keywords: ['edutech', 'technology', 'digital', 'learning', 'multimedia', 'elearning', 'tech', 'centre']
                },
                {
                    question: 'Does Loyola College have a Campus Ministry?',
                    answer: 'Yes, the Campus Ministry at Loyola College nurtures the spiritual life of the campus community. In keeping with Jesuit tradition, it organizes retreats, prayer services, meditation sessions, and social outreach programs. The Campus Ministry is open to students of all faiths and promotes values of compassion, justice, and service. More at https://www.loyolacollege.edu.',
                    keywords: ['campus', 'ministry', 'spiritual', 'prayer', 'church', 'chapel', 'retreat', 'faith', 'religion', 'mass']
                }
            ]
        },

        // ════════════════════════════════════════════════════════
        // RESEARCH
        // ════════════════════════════════════════════════════════
        research: {
            keywords: ['research', 'phd', 'project', 'publication', 'journal', 'paper', 'scholar', 'unit', 'centre'],
            entries: [
                {
                    question: 'What are the research units at Loyola College?',
                    answer: 'Loyola College has several dedicated research units: CSSEIP (Centre for Social Sciences, Equity, and Inclusion Policy), ERI (Entomological Research Institute), LIFE (Loyola Institute of Frontier Energy), and LISSTAR (Loyola Institute of Social Science Training and Research). Additionally, the college has a Research Park. These units conduct cutting-edge research in social sciences, biological sciences, energy, and more. Details at https://www.loyolacollege.edu/research.',
                    keywords: ['research', 'units', 'centres', 'centers', 'csseip', 'eri', 'life', 'lisstar', 'institutes']
                },
                {
                    question: 'What is CSSEIP at Loyola College?',
                    answer: 'CSSEIP stands for Centre for Social Sciences, Equity, and Inclusion Policy at Loyola College. It focuses on research and policy advocacy in areas of social equity, inclusion, and justice. The centre conducts studies, publishes reports, and organizes seminars on issues related to marginalized communities and social development. Visit https://www.loyolacollege.edu/research for more.',
                    keywords: ['csseip', 'social', 'sciences', 'equity', 'inclusion', 'policy', 'centre']
                },
                {
                    question: 'What is ERI at Loyola College?',
                    answer: 'ERI stands for Entomological Research Institute at Loyola College. It is a renowned research centre dedicated to the study of insects (entomology). The institute conducts research on insect taxonomy, pest management, biodiversity, and related fields. ERI has published numerous research papers and contributes significantly to biological science research.',
                    keywords: ['eri', 'entomological', 'research', 'institute', 'insect', 'entomology', 'biology']
                },
                {
                    question: 'What is LIFE at Loyola College?',
                    answer: 'LIFE stands for Loyola Institute of Frontier Energy at Loyola College. This research institute focuses on frontier energy research including renewable energy, sustainable technologies, and energy-related innovations. LIFE conducts research projects, collaborates with industry, and contributes to sustainable development goals.',
                    keywords: ['life', 'frontier', 'energy', 'institute', 'renewable', 'sustainable', 'solar']
                },
                {
                    question: 'What is LISSTAR at Loyola College?',
                    answer: 'LISSTAR stands for Loyola Institute of Social Science Training and Research. It focuses on social science research, training programs, and capacity building in areas of social development. LISSTAR conducts workshops, training programs, and research projects aimed at social transformation and community empowerment.',
                    keywords: ['lisstar', 'social', 'science', 'training', 'research', 'institute']
                },
                {
                    question: 'Does Loyola College have a Research Park?',
                    answer: 'Yes, Loyola College has established a Research Park to foster innovation, research, and industry-academia collaboration. The Research Park provides infrastructure and support for research projects, startups, and collaborative ventures. It serves as a hub for translating academic research into practical applications. Visit https://www.loyolacollege.edu/research for details.',
                    keywords: ['research', 'park', 'innovation', 'startup', 'industry', 'collaboration', 'incubation']
                }
            ]
        },

        // ════════════════════════════════════════════════════════
        // STUDENT LIFE
        // ════════════════════════════════════════════════════════
        studentLife: {
            keywords: ['student', 'life', 'club', 'clubs', 'event', 'events', 'cultural', 'festival', 'council', 'activity', 'activities', 'extra', 'curricular'],
            entries: [
                {
                    question: 'What is student life like at Loyola College?',
                    answer: 'Student life at Loyola College is vibrant and dynamic. The campus buzzes with academic, cultural, and extracurricular activities throughout the year. Students can participate in numerous clubs, cultural festivals, sports events, and social outreach programs. The Jesuit emphasis on holistic development ensures a well-rounded college experience. Learn more at https://www.loyolacollege.edu/student-life.',
                    keywords: ['student', 'life', 'campus', 'experience', 'what', 'like', 'culture']
                },
                {
                    question: 'What is the Students\' Council (LSU) at Loyola College?',
                    answer: 'The LSU (Loyola Students\' Union) is the elected Students\' Council that represents the student body at Loyola College. The LSU organizes cultural events, sports tournaments, and student welfare activities. Student elections are held annually to choose council members who serve as the voice of students in college governance.',
                    keywords: ['students', 'council', 'lsu', 'union', 'elected', 'representative', 'election', 'body']
                },
                {
                    question: 'What clubs and associations are available at Loyola College?',
                    answer: 'Loyola College has numerous clubs and associations catering to diverse interests including literary clubs, debating societies, cultural committees, science clubs, environmental groups, social service organizations, and hobby-based groups. Each department also has its own association organizing academic and cultural events. These clubs provide platforms for student talent and leadership development.',
                    keywords: ['clubs', 'associations', 'societies', 'groups', 'activities', 'extracurricular', 'co-curricular', 'join']
                },
                {
                    question: 'Does Loyola College have cultural festivals?',
                    answer: 'Yes, Loyola College hosts several cultural festivals and events throughout the academic year. These include inter-collegiate cultural competitions, department fests, Christmas celebrations, and special events. The cultural scene at Loyola is one of the most vibrant among Chennai colleges, featuring music, dance, drama, literary events, and more.',
                    keywords: ['cultural', 'festival', 'fest', 'event', 'celebration', 'competition', 'inter', 'collegiate', 'christmas']
                },
                {
                    question: 'Does Loyola College have an anti-ragging committee?',
                    answer: 'Yes, Loyola College has a strict anti-ragging policy with a dedicated Anti-Ragging Committee. The college maintains zero tolerance for ragging in any form. Students can report incidents to the committee, and strict action is taken against violators as per UGC regulations. A safe and respectful campus environment is a top priority. Report concerns to the college office or anti-ragging helpline.',
                    keywords: ['anti', 'ragging', 'committee', 'safety', 'bullying', 'complaint', 'harassment', 'zero', 'tolerance']
                },
                {
                    question: 'Does Loyola College offer NPTEL/SWAYAM courses?',
                    answer: 'Yes, Loyola College encourages students to enroll in NPTEL (National Programme on Technology Enhanced Learning) and SWAYAM (Study Webs of Active-Learning for Young Aspiring Minds) courses. These are online courses offered by IITs and top universities. Students can earn additional credits and certifications through these government-backed platforms. The college facilitates registration and conducts exams.',
                    keywords: ['nptel', 'swayam', 'online', 'course', 'mooc', 'certificate', 'iit', 'credit']
                }
            ]
        },

        // ════════════════════════════════════════════════════════
        // ALUMNI
        // ════════════════════════════════════════════════════════
        alumni: {
            keywords: ['alumni', 'alumnus', 'alumna', 'old', 'student', 'graduate', 'laa', 'association', 'former'],
            entries: [
                {
                    question: 'Does Loyola College have an alumni association?',
                    answer: 'Yes, the Loyola Alumni Association (LAA) has been active since 1990. The LAA connects former students of Loyola College worldwide and organizes reunions, networking events, and mentorship programs. Alumni can register and stay connected through the official alumni website at https://www.loyolaalumni.org.',
                    keywords: ['alumni', 'association', 'laa', 'network', 'connect', 'former', 'graduate']
                },
                {
                    question: 'How can I join the Loyola Alumni Association?',
                    answer: 'Former students of Loyola College can join the Loyola Alumni Association (LAA) by registering at the official alumni website: https://www.loyolaalumni.org. Membership provides access to alumni events, networking opportunities, mentorship programs, and the alumni directory. The LAA also organizes annual reunions and contributes to college development.',
                    keywords: ['join', 'register', 'membership', 'alumni', 'how', 'sign', 'up', 'website']
                },
                {
                    question: 'What is the alumni website of Loyola College?',
                    answer: 'The official Loyola Alumni Association website is https://www.loyolaalumni.org. Through this portal, alumni can register for membership, update their profiles, connect with fellow alumni, stay informed about alumni events, and contribute to the alumni fund. The website also features alumni success stories and news.',
                    keywords: ['website', 'url', 'link', 'portal', 'alumni', 'loyolaalumni', 'org']
                },
                {
                    question: 'Who are some notable alumni of Loyola College?',
                    answer: 'Loyola College has produced many distinguished alumni across various fields including politics, cinema, business, sports, academia, and public service. The college is proud of its alumni who have made significant contributions to society and continue to uphold the Loyola values. For a list of notable alumni and their achievements, visit https://www.loyolaalumni.org or the college website.',
                    keywords: ['notable', 'famous', 'distinguished', 'prominent', 'well', 'known', 'achievers', 'who']
                }
            ]
        },

        // ════════════════════════════════════════════════════════
        // SPECIAL PROGRAMS
        // ════════════════════════════════════════════════════════
        specialPrograms: {
            keywords: ['special', 'program', 'programs', 'ias', 'academy', 'exchange', 'certificate', 'vocational', 'training'],
            entries: [
                {
                    question: 'Does Loyola College have an IAS Academy?',
                    answer: 'Yes, Loyola College has an IAS Academy that prepares students for the UPSC Civil Services Examination and other competitive exams. The academy provides coaching in General Studies, CSAT, optional subjects, and mock interviews. It has been instrumental in helping Loyola students crack prestigious civil services exams. For enrollment details, visit https://www.loyolacollege.edu or contact the academy office.',
                    keywords: ['ias', 'academy', 'upsc', 'civil', 'services', 'competitive', 'exam', 'coaching', 'preparation']
                },
                {
                    question: 'What is LIAC at Loyola College?',
                    answer: 'LIAC (Loyola Institute for the Advancement of the Community) at Loyola College focuses on community development and social outreach. It runs programs aimed at empowering marginalized communities, providing vocational training, and promoting social justice in line with the Jesuit mission of service. For more information, visit https://www.loyolacollege.edu.',
                    keywords: ['liac', 'community', 'advancement', 'institute', 'social', 'outreach', 'development']
                },
                {
                    question: 'What is PULCS at Loyola College?',
                    answer: 'PULCS (Part-Time Under-Privileged Loyola Community Service) at Loyola College is a program dedicated to serving underprivileged communities. It involves students in community service, social awareness campaigns, and outreach programs. PULCS reflects the Jesuit commitment to social justice and forming "men and women for others."',
                    keywords: ['pulcs', 'part', 'time', 'under', 'privileged', 'community', 'service']
                },
                {
                    question: 'Does Loyola College offer CAJ/CAM certificate programs?',
                    answer: 'Yes, Loyola College offers CAJ (Certificate in Applied Journalism) and CAM (Certificate in Applied Marketing) programs. These certificate courses provide practical training in journalism and marketing respectively, supplementing the regular degree programs. They help students gain industry-relevant skills alongside their main degree. Contact the respective departments for enrollment information.',
                    keywords: ['caj', 'cam', 'certificate', 'applied', 'journalism', 'marketing', 'additional', 'course']
                },
                {
                    question: 'What is LIVE at Loyola College?',
                    answer: 'LIVE stands for Loyola Institute of Vocational Education. It offers vocational diploma and certificate courses designed to provide practical skills and enhance employability. LIVE courses cover various fields and are aimed at students seeking skill-based training alongside or after their academic programs. Visit https://www.loyolacollege.edu for the latest course offerings.',
                    keywords: ['live', 'vocational', 'education', 'institute', 'diploma', 'certificate', 'skill', 'training']
                },
                {
                    question: 'Does Loyola College have semester exchange programs?',
                    answer: 'Yes, Loyola College offers semester exchange programs with universities in France and Belgium. Students, particularly from the French department, can spend a semester abroad, gaining international exposure, cultural immersion, and academic credits. These programs strengthen Loyola\'s global academic network and provide unique learning opportunities. Contact the Department of French or the International Relations office for eligibility and application details.',
                    keywords: ['exchange', 'semester', 'abroad', 'france', 'belgium', 'international', 'foreign', 'university', 'study']
                },
                {
                    question: 'What competitive exam coaching does Loyola College provide?',
                    answer: 'Apart from the IAS Academy, Loyola College provides guidance and coaching for various competitive examinations including banking, SSC, and state-level exams. The Training & Placement Cell and Career Guidance Centre also help students prepare for entrance exams for higher studies. Visit https://www.loyolacollege.edu for details on available coaching programs.',
                    keywords: ['competitive', 'exam', 'coaching', 'banking', 'ssc', 'entrance', 'preparation', 'gate', 'cat']
                }
            ]
        }
    },

    // ════════════════════════════════════════════════════════
    // GREETING RESPONSES
    // ════════════════════════════════════════════════════════
    greetings: {
        patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings', 'namaste', 'vanakkam', 'howdy', 'sup', 'what\'s up', 'yo'],
        responses: [
            'Hello! 👋 Welcome to the Loyola AI Assistant. I\'m here to help you with any questions about Loyola College, Chennai. What would you like to know?',
            'Hi there! 🎓 I\'m the Loyola AI Assistant. Ask me anything about Loyola College — admissions, courses, placements, campus life, and more!',
            'Hey! Welcome! ✨ I\'m your guide to Loyola College, Chennai. "Let Your Light Shine!" How can I help you today?',
            'Greetings! 🙏 I\'m the Loyola AI Assistant. Whether you need info about admissions, courses, scholarships, or campus facilities — I\'m here to help!'
        ]
    },

    // ════════════════════════════════════════════════════════
    // FAREWELL RESPONSES
    // ════════════════════════════════════════════════════════
    farewells: {
        patterns: ['bye', 'goodbye', 'see you', 'later', 'thanks bye', 'thank you bye', 'quit', 'exit', 'close'],
        responses: [
            'Goodbye! 👋 Thank you for using the Loyola AI Assistant. "Let Your Light Shine!" 🌟',
            'See you later! 🎓 Feel free to come back anytime you have questions about Loyola College. Take care!',
            'Thank you for chatting! 🙏 Wishing you the best. Visit https://www.loyolacollege.edu for more information. Bye!'
        ]
    },

    // ════════════════════════════════════════════════════════
    // THANK YOU RESPONSES
    // ════════════════════════════════════════════════════════
    thanks: {
        patterns: ['thank', 'thanks', 'thank you', 'thx', 'ty', 'appreciate', 'helpful', 'great answer'],
        responses: [
            'You\'re welcome! 😊 Feel free to ask if you have more questions about Loyola College.',
            'Happy to help! 🌟 Is there anything else you\'d like to know about Loyola College?',
            'Glad I could assist! 🎓 Don\'t hesitate to ask more questions. "Let Your Light Shine!"'
        ]
    },

    // ════════════════════════════════════════════════════════
    // FALLBACK / DEFAULT RESPONSES
    // ════════════════════════════════════════════════════════
    fallback: {
        responses: [
            'I\'m not sure I have that specific information. Could you rephrase your question? You can ask me about admissions, courses, placements, hostel, fees, scholarships, or campus life at Loyola College.',
            'I don\'t have enough information to answer that right now. Try asking about specific topics like admissions, departments, examinations, or contact details. You can also visit https://www.loyolacollege.edu for comprehensive information.',
            'I couldn\'t find a matching answer. Here are some topics I can help with:\n• Admissions & Courses\n• Hostel & Fees\n• Placements & Careers\n• Scholarships\n• Examinations\n• Campus Facilities\n• Contact Information\n\nPlease try rephrasing your question!'
        ],
        suggestions: [
            'How do I apply for admission?',
            'What courses are available?',
            'Tell me about placements',
            'What scholarships are offered?',
            'How can I contact the college?'
        ]
    },

    // ════════════════════════════════════════════════════════
    // REJECTION MESSAGE (for non-Loyola queries)
    // ════════════════════════════════════════════════════════
    rejection: {
        message: 'I am the Loyola AI Assistant and I can only answer questions related to Loyola College, Chennai. Please ask me about admissions, courses, placements, campus life, scholarships, examinations, or any other Loyola College-related topic! 🎓',
        suggestions: [
            'Tell me about Loyola College',
            'How do I apply for admission?',
            'What courses are offered?',
            'Tell me about the hostel',
            'What are the college rankings?'
        ]
    }
};
