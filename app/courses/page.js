import Header from '../(components)/header/header';
import TextCard from './(components)/textCard';
import ImageCard from './(components)/imageCard';
import client from '../sanity/client';

const Courses = async () => {
  const courses = await client.fetch('*[_type == "courses" ]');
  const bestCourses = await client.fetch('*[_type == "best-courses" ]');
  
  console.log(courses);
  
  return (
    <>
      <Header title="OUR COURSES" />

      <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          {
            courses.map(val => (
              <TextCard title={val.title} description={val.description} />
            ))
          }
        </div>
      </section>

      <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          {
            bestCourses.map(val => (
              <ImageCard src={val.image} title={val.title} description={val.description} />
            ))
          }
        </div>
      </section>
    </>
  );
}

export default Courses;
