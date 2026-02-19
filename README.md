# Personal Website - About Me Questions

Welcome! This README contains questions to help you populate your personal website with compelling content. Answer these questions to personalize your site.

## 📝 Basic Information

1. **What is your full name?**
   - Carlo Golfo

2. **What is your professional title or tagline?**
   - AI Research Engineer | ML Algorithms | Full-Stack Developer | Open to Opportunities

3. **What is a brief description of yourself (2-3 sentences)?**
   - I'm a machine learning researcher exploring the mathematical foundations of modern AI, while maintaining a track record of building products that users actually love.

## 🖼️ Visual Assets

4. **Do you have a professional profile photo?**
   - Place it in `assets/images/professionalheadshot.jpg`
   - Recommended size: 300x300px or larger (square aspect ratio)
   - Format: JPG or PNG

5. **Do you have a resume/CV ready?**
   - Place it in `assets/resume/Carlo_Golfo_Software_Engineer_Resume_2026.pdf`
   - Update the resume link in `index.html` (line 30) with your actual filename

## 💼 Professional Information

6. **What are your key skills and technologies?**
   - Python
   - Machine Learning
   - TensorFlow
   - PyTorch
   - Java
   - React Native
   - Recommendation Systems
   - Database Design
   - Kernel Methods
   - Git/GitHub

7. **What is your professional background?**
   - Current role and company (if applicable)
   - Years of experience
   - Areas of expertise

8. **What are your career goals or what are you looking for?**
   - Job opportunities, freelance work, collaboration, etc.

## 🚀 Projects

9. **What are 3-6 projects you'd like to showcase?**
   For each project, provide:
   - **Project Name**
   - **Description** (2-3 sentences)
   - **GitHub URL** (if available)
   - **Live Demo URL** (if available)
   - **Technologies used** (optional, for your reference)

   From resume PDF:
   - **CS4210-Final-Project** — GitHub: https://github.com/timhhsieh/CS4210-Final-Project
   - **cs4750App** — GitHub: https://github.com/cgolfo/cs4750App

## 📧 Contact Information

10. **What is your email address?**
    - Format: mailto:cgolfo2002@gmail.com

11. **What are your social media profiles?**
    - GitHub: https://github.com/cgolfo
    - LinkedIn URL
    - Twitter/X URL (if applicable)
    - Personal website/blog URL (if applicable)
    - Other relevant profiles (Portfolio, Behance, Dribbble, etc.)

## 🎨 Personalization (Optional)

12. **What colors represent your brand?**
    - Primary color (currently blue: #2563eb)
    - Secondary color (currently dark blue: #1e40af)
    - You can update these in `styles/main.css` under `:root` variables

13. **Do you have any specific sections you'd like to add?**
    - Blog section
    - Testimonials
    - Certifications
    - Education
    - Work experience timeline

14. **What is your preferred writing style?**
    - Professional and formal
    - Casual and friendly
    - Technical and detailed
    - Creative and expressive

## 📋 Next Steps

After answering these questions:

1. **Update `index.html`:**
   - Replace `[Your Name]` with your actual name (multiple places)
   - Replace `[Your Professional Title or Tagline]` with your title
   - Replace `[Your about me description]` with your description
   - Replace `[Your contact message]` with your contact message
   - Update the resume filename in the download link

2. **Update `scripts/main.js`:**
   - Add your skills to the `loadSkills()` function (around line 40)
   - Add your projects to the `loadProjects()` function (around line 50)
   - Add your contact links to the `loadContactLinks()` function (around line 80)

3. **Add your assets:**
   - Place your profile photo in `assets/images/profile.jpg`
   - Place your resume in `assets/resume/[your-resume.pdf]`
   - Add any other images you want to use

4. **Customize styling (optional):**
   - Update colors in `styles/main.css` if desired
   - Adjust fonts, spacing, or layout as needed

## 🚀 Getting Started

1. Open `index.html` in your browser to preview
2. Use a local development server for best results:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```
3. Visit `http://localhost:8000` in your browser

## 📁 Project Structure

```
carlogolfo/
├── index.html          # Main HTML file
├── styles/
│   └── main.css       # Main stylesheet
├── scripts/
│   └── main.js        # Main JavaScript file
├── assets/
│   ├── images/        # Your images (profile photo, etc.)
│   └── resume/        # Your resume/CV
└── README.md          # This file
```

## 💡 Tips

- Keep your about me description concise but engaging
- Use high-quality images for your profile photo
- Make sure all links work before publishing
- Test your site on different screen sizes (it's responsive!)
- Consider adding a favicon for a professional touch

---

**Need help?** Review the code comments in each file for guidance on where to make changes.
