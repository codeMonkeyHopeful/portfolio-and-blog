import { projectLinkPlaceholder } from '@/constants/index';
import { FC } from 'react';

export const ProjectsList: FC = ({}) => {
  return (
    <div className="container-md">
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title">Projects</h5>
        </div>
        <table className="table">
          <thead>
            <th scope="col">Project Name</th>
            <th scope="col">Link</th>
            <th scope="col">Why Did I Make It?</th>
          </thead>
          <tbody>
            {projectLinkPlaceholder.map((el) => {
              const formattedLink = (
                <a href={el.url} target="_blank">
                  Repo
                </a>
              );
              return (
                <tr key={el.url}>
                  <td>{el.name}</td>
                  <td>{formattedLink}</td>
                  <td>{el.purpose}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
