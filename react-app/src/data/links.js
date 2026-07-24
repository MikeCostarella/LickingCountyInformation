// Licking County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-24

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The vendor that hosts the county Auditor's online parcel/property records.
export const AUDITOR_VENDOR = "OnTrac (county-hosted)";

export const LINKS = [
  // ---------- Government ----------
  { name: "Licking County (Official Site)", category: "Government", subcategory: "County", url: "https://lickingcounty.gov/", description: "Official government portal for Licking County, Ohio (county seat: Newark)." },
  { name: "Licking County Auditor", category: "Government", subcategory: "Auditor", url: "https://lickingcounty.gov/depts/auditor/", description: "Property records, valuations, and parcel search (OnTrac real estate search + county GIS parcel viewer)." },
  { name: "Licking County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/licking/", description: "Voter registration, polling locations, and election administration." },
  { name: "City of Newark", category: "Government", subcategory: "City", url: "https://www.newarkohio.gov/", description: "Government site for the City of Newark, the county seat." },
  // ---------- Education ----------
  { name: "Licking County Library", category: "Education", subcategory: "Library", url: "https://www.lickingcountylibrary.org/", description: "County public library system, headquartered in downtown Newark." },
  { name: "Newark City Schools", category: "Education", subcategory: "K-12", url: "https://www.newarkcityschools.org/", description: "Public school district serving the City of Newark (home of the Wildcats)." },
  { name: "Denison University", category: "Education", subcategory: "Higher Ed", url: "https://denison.edu/", description: "Private liberal arts university in Granville, Licking County." },
  { name: "Ohio State Newark & COTC", category: "Education", subcategory: "Higher Ed", url: "https://newark.osu.edu/", description: "Shared campus of Ohio State University at Newark and Central Ohio Technical College." },
  // ---------- Health ----------
  { name: "Licking Memorial Health Systems", category: "Health", subcategory: "Hospital", url: "https://www.lmhealth.org/", description: "Licking Memorial Hospital and health network, based in Newark." },
  { name: "Licking County Health Department", category: "Health", subcategory: "Public Health", url: "https://lickingcohealth.org/", description: "County public-health agency: clinics, inspections, vital records, and programs." },
  // ---------- Business & Economy ----------
  { name: "Licking County Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.lickingcountychamber.com/", description: "Business advocacy, member support, and community resources across Licking County." },
  // ---------- Community & Social ----------
  { name: "OhioMeansJobs Licking County", category: "Community & Social", subcategory: "Workforce", url: "https://ohiomeansjobs.ohio.gov/", description: "Workforce, job-search, and employment services for county residents." },
  // ---------- Recreation & Tourism ----------
  { name: "Explore Licking County", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://explorelc.org/", description: "Convention & visitors bureau — the Great Circle Earthworks, Dawes Arboretum, downtown Newark, and events." },
  // ---------- News & Media ----------
  { name: "The Advocate (Newark)", category: "News & Media", subcategory: "Newspaper", url: "https://www.newarkadvocate.com/", description: "Newark's daily newspaper covering Licking County news, sports, and events." },
];
