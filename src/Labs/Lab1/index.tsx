export default function Lab1() {
    return (
      <div id="wd-lab1">
        <h2>Lab 1</h2>
        <h3>HTML Examples</h3>
        <div id="wd-h-tag">
            <h4>Heading 4 tag</h4>
            Text documents are often broken up into several sections and 
            subsections. Each section is usually prefaced with a short title 
            or heading that attempts to summarize the topic of the section 
            it precedes. For instance this paragraph is preceded by the 
            heading Heading Tags. The font of the section headings are usually
            larger and bolder than their subsection headings. This document uses 
            headings to introduce topics such as HTML Documents, HTML Tags, Heading 
            Tags, etc. HTML heading tags can be used to format plain text so that it 
            renders in a browser as large headings. There are 6 heading tags for 
            different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading 
            and h6 is the smallest heading.
        </div>

        <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
            <p id="wd-p-1">
                This is a paragraph. We often separate a long set of sentences with vertical spaces to make the text easier to read. Browsers ignore vertical white spaces and render all the text as one single set of sentences. To force the browser to add vertical spacing, wrap the paragraphs you want to separate with the paragraph tag
            </p>
            <p id="wd-p-2">
                This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one.
            </p>
            <p id="wd-p-3">
                This is the second paragraph. Even though there is a deliberate white
                gap between the paragraph above and this paragraph, by default
                browsers render them as one contiguous piece of text as shown here on
                the right.
            </p>
            <p id="wd-p-4">
                This is the third paragraph. Wrap each paragraph with the paragraph
                tag to tell browsers to render the gaps.
            </p>

        </div>

        <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make a quesadilla:
        <ol id="wd-pancakes">
        <li>Cut and gather vegetables (bell peppers, onions, corn, etc)</li>
        <li>Cook bell peppers and onion on pan with oil and respective seasonings</li>
        <li>When onion and peppers are translucent add other vegetables</li>
        <li>Get tortilla and put cheese, beans, cooked vegetables, and sauces</li>
        <li>Cook tortilla on the pan until cheese is melted</li>
        <li>Serve and enjoy!</li>
  </ol>

        <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
        <ul id="wd-my-books">
        <li>Six of Crows</li>
        <li>Fourth Wing</li>
        <li>Throne of Glass</li>
        </ul>
      </div>

      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>React</td>
              <td>2/14/21</td>
              <td>98</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>React Apps</td>
              <td>2/20/21</td>
              <td>82</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td>Restful APIs</td>
              <td>3/1/21</td>
              <td>91</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td>MongoDB</td>
              <td>3/3/21</td>
              <td>86</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td>Databases</td>
              <td>3/10/21</td>
              <td>78</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td>UI</td>
              <td>4/1/21</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td>Back-end</td>
              <td>4/10/21</td>
              <td>91</td>
            </tr>
            <tr>
              <td>Q10</td>
              <td>Authentication</td>
              <td>4/14/21</td>
              <td>84</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet: <br />
        <img id="wd-starship" width="400px"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" />
        <br />
        Loading a local image:
        <br />
        <img id="wd-teslabot" src="public/images/teslabot.jpg" height="200px" />
      </div>

      <div id="wd-forms">
  <h4>Form Elements</h4>
  <form id="wd-text-fields">
    <h5>Text Fields</h5>
    <label htmlFor="wd-text-fields-username">Username:</label>
    <input placeholder="jdoe" id="wd-text-fields-username" /> <br />
    <label htmlFor="wd-text-fields-password">Password:</label>
    <input type="password" value="123@#$asd" id="wd-text-fields-password" />
    <br />
    <label htmlFor="wd-text-fields-first-name">First name:</label>
    <input type="text" title="John" id="wd-text-fields-first-name" /> <br />
    <label htmlFor="wd-text-fields-last-name">Last name:</label>
    <input type="text" placeholder="Doe"
           value="Wonderland"
           title="The last name"
           id="wd-text-fields-last-name" /> <br />
    <label htmlFor="wd-text-fields-email">Email: </label>
    <input type="email" placeholder="username@gmail.com" id="wd-text-fields-email" /> <br />    
    <label htmlFor="wd-text-fields-phone">Phone Number: </label>
    <input type="phone" placeholder="123-456-7890" id="wd-text-fields-phone" /> <br />   
  </form>
</div>

<h5>Text boxes</h5>
<label>Biography:</label><br/>
<textarea id="wd-textarea" cols={30} rows={10}>LSed ut perspiciatis unde omnis iste natus error sit 
voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat 
voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi 
ut aliquid ex ea commodi consequatur?</textarea>

<h5 id="wd-buttons">Buttons</h5>
<button type="button"
        onClick={() => alert("Life is Good!")}
        id="wd-all-good">
  Hello World!
</button>


<h5 id="wd-radio-buttons">Radio buttons</h5>

<label>Favorite movie genre:</label><br />

<input type="radio" name="radio-genre" id="wd-radio-horror"/>
<label htmlFor="wd-radio-horror">Horror</label><br />

<input type="radio" name="radio-genre" id="wd-radio-romance"/>
<label htmlFor="wd-radio-romance">Romance</label><br />

<input type="radio" name="radio-genre" id="wd-radio-historical"/>
<label htmlFor="wd-radio-historical">Historical</label><br />

<input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
<label htmlFor="wd-radio-fantasy">Fantasy</label>

<h5 id="wd-checkboxes">Checkboxes</h5>
<label>Favorite movie genre:</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
<label htmlFor="wd-chkbox-comedy">Comedy</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
<label htmlFor="wd-chkbox-drama">Drama</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
<label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
<label htmlFor="wd-chkbox-fantasy">Fantasy</label>

<h4 id="wd-dropdowns">Dropdowns</h4>

<h5>Select one</h5>
<label  htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br/>
<select id="wd-select-one-genre">
   <option value="COMEDY">Comedy</option>
   <option value="DRAMA">Drama</option>
   <option selected value="SCIFI">
       Science Fiction</option>
   <option value="FANTASY">Fantasy</option>
</select>

<h5>Select many</h5>
<label  htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br/>
<select multiple id="wd-select-many-genre">
   <option value="COMEDY" selected> Comedy</option>
   <option value="DRAMA">Drama</option>
   <option value="SCIFI"  selected> Science Fiction </option>
   <option value="FANTASY">Fantasy</option>
</select>

<h4>Other HTML field types</h4>

<label htmlFor="wd-text-fields-email"> Email: </label>
<input type="email"
       placeholder="jdoe@somewhere.com"
       id="wd-text-fields-email"/><br/>

<label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
<input type="number"
       value="100000"
       placeholder="1000"
       id="wd-text-fields-salary-start"/><br/>

<label htmlFor="wd-text-fields-rating"> Rating: </label>
<input type="range"
       value="4"
       max="5"
       placeholder="Doe"
       id="wd-text-fields-rating"/><br/>

<label htmlFor="wd-text-fields-dob"> Date of birth: </label>
<input type="date"
       value="2000-01-21"
       id="wd-text-fields-dob"/><br/>
       
       <h4>Anchor tag</h4> 
       Please <a href="https://www.lipsum.com" id="wd-lipsum">click here</a> to get dummy text<br/>
      </div>
  );}
  