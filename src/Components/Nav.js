import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
  const [show,handleShow]=useState(false);
  const transitionNavBar=()=>{
    if(window.scrollY>100){
      handleShow(true);
    }else{
      handleShow(false);
    }
  };
  useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar);
    return ()=>{
      window.removeEventListener("scroll",transitionNavBar);
    }
  },[])
  return (
      <div className={`nav ${show && "nav_black"}`}>
    <img
        className="nav_logo"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBEOEA4OEBERDhAODg4OEA4OEREQDg4OFxMYGBcTFxcbICwkGx02HhcXJjglKS4wMzMzGiQ5PzkxPSwyMzMBCwsLEA4QGhISFzIgICAwMjAyMDIyMjA0MjIyMDIyMDIyMzIyMDIwMDIyMjIyMDIyMjIyMDA0MjIyMjAyMDAyMv/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIDBQYEB//EADsQAAICAQAECggFBAMBAAAAAAABAhEDBAUhMQYSQVFSYXGBkbETIiNCc5KhwRUyM7LRU3KC8BRiwjT/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAQIDBAYFB//EADIRAAIBAwEDCQkBAQEAAAAAAAABEQIDBCExQYEFEhRRYXGh0fATIjJSU5GxweEz8TT/2gAMAwEAAhEDEQA/ANgAD6J+cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEWRZAsElrFkEWAWsWVsWAWsWVsWAWsWVskAWTZWwAWsWVsWAWsWQQATZNlbABaxZWwATZNlbABaxZAAJsiyLFhMFrFlRYBaxZWxYBaxZBFkAmwASSUsWRZWypMF7FlLFgQXsWUsWBBexZSxYEF7FkWRYEFrFlVtpLa3sSW9s92LVmR7X7Lrk3f02rvM7l2i2prqSXaaW7Nd1xRTPd6/J47Fmw/CJf1I+DH4S/6kfBmHT8f6iN+gZHyeK8zX2LNh+Ev+ovBkfhT/AKkflY6dj/UQ6BkfJ4rzPBYs9/4W+mvlY/C3018rJ6bj/URHQcj5PFeZ4LFnu/DH018rH4Y+mvlY6bj/ADrxHQb/AMnivM8Niz1y1dJbpRl1bU/qjyZccoOpJxfXy9nOa279u58FSZlcsXLfx0tCxZSybNTKC1iytkWBBexZWxYEFrFlLFgQXsWVsiwIL2ClgEwRYspYsrJYvYspYsSC9iylixIL2LKWLJBeyYJyailbk0klyt8hjs2upMVynke+KjGPbK9v0ZjkXlZt1XGtnpeMG2PZd64qFv8Axtfge/Q9EjhXJKb/ADT/AI5l5/Q9JFlbPIXLld2p11uW/X2PU0UU26VTSoSJbCTk0km29yStvuPbq/Vss/rP1IdLll1Jfc6LRtFhiVQSXO98n2s6sfCque89F63G1Fp167jnsGp809rSxr/s9vgr+p648H+fL3KH3s3wPo04NpbVPHyg2Vig0T4PrkytdsE/uebNqLLH8koz6vySf2+p0wLPDtPdHFh2KHuOH0jBPG6nGUHyWrT7HuZhbO6nBSTjJKSe9NJpmi1jqPY5YO142/2v7M5bmE6dadfz/TmuY1S1p1NC2UyQjNcWSteT50Wey09jWxp7GnzFTnplOUcThqGafScTxy4r2renzoxWbPWMLxuXLHb3cv08jUqV7T0GLfd23L2rR+vWsnw8mz7OuFsezy4F7FlLFnUcxexZSxYBexZSxYBexZSxYBeyCtgiQUsWVsWVLwWsWUsmwILWLKWTYEFrFlbFgQWs3upf0pf3vyRz9m/1K/ZP4j8kcHKX/nfevyd/J2l7gzY2bDVWgemlxpfpwe3/ALy6P8nhw43knHHHfNpLq6zsNHwrHCMI7oqu3nZ8jDx1cq51WxeL8j0VmjnOXsRkjFJJJJJKklsSXMWB59L0qGCDyZJKMI72/JLlfUfbOxuNWegq2ltbSXO9hwetOFmbLccHsIc+yWSS6+Rd3ic/nzTyPjZG5y6Tty8WXVts+Nf5bs0OLdLq7di++v4PrcckZbmn2NMufHEuXba2p7bRt9A4Q6To7XrvJDlhk2xrqvd3Ml23uM7PL1up+/bdPanP6XhJ9MBqNTa4xaZH1fUyJJyxSdyS50+Vdfkbco9D7du5TcpVVLlM0eutWelTy417SKtxXvpffz8DmLPoZx/CDQvRZePFVHLclzRn7y+/e+Y4cmyvjXE4sy1Hvrj5mm0j9PJ/ZP8AaznMc67DotI/TyfDn5M5hM6MDSmrgfCy9Wj2WLPPDJWx7vIzWd8nz3TBaxZWxZJEFrFlLJsCC1iylk2BBawVsAQY7FlbFlZNIL2RZWxYkQWsWVsWJEFrFlbFiRBezf6kfspfEfkjnbN/qN+yl8SXkjh5R1sPvR2YH+vBnWcHcPGnLI/cikv7pb34L6nRGq4PRrBfSnJ+Gz7G1KYlPNtU9uv3PU2VFCB814Ra2el5qi/ZY24448kueT635d52nCTSXh0TPJb2owX+Ukn9Gz5rixucowjtlOS4q55N0jsoW8+Jy3ktc2xTv1fbuS+8+Bs9SakyaY216mODqWRq1fMly/bwvtND4O6LhqsanLllkuV925eB79A0SOj4oYY7oRq+WT5ZPrbtnqK1VSd+HybasUrnUqqre3rr2dRrc+ptFyKp4IdsVxH4xpnMa84LPFGWXR25wW14pfmh1p8q6juQQqmjbIwbOQoqpU9a2/3ifIdG0iWKcMkG4yi+NGS/3auSj6fqrTY6Vhhmjs4yqUejNb1/vJRwnCjQVo+ky4q9nkiskEt0eTirwfc0bbgJpL42fC3s4sMkVzU2m/qvA0r1Unw+TK68bKqx6tjlcVqnxX66jtDWa+0f0mj5OeFZF3b/AKWbMpKKknF7mmn2Mxqp5yjrPS1086l09Z820h+pk/sn+1nMRZ02kpqGVPeoTT7UmcsmZ4eyo8nf1gypmSE+QwIsmdpzNHosiykZE2TJSC1k2UsWJEFrFlbFiRBawVsCRBSxZWxZQvBaxZWxYEFrFlbFgQWsWUsmwILWdBqJ+xl8SXkjnbOg1C/ZS+I/JHJnf4vvR14elzgd/qL/AObH2z/czZml4N5LxThyxlf+Mls+qZuhYc26e5HqLLminuNBwzi3oU2vdnjb7LrzaOH1RNR0jR5S3RyQk+xNNn0vWei/8jBlwv340r3KSdp+KR8qnBxbjJNOLcZRe9NbGmdVGqaPO8s01W8i3djcvvS5/Z9hBouDmt46XjUZP22OKU4vfJblLr6+Z9xvTJqD0dq7RdpVdDlP19zi9ZcLcmPNPHhhFwg5K5XKUmnTe9Uub/UdDqjWmPTMfHhslHZODdyi/ujmuFGoHBy0rCm4tuWSC3wbe1rq8jnNE06WizWaD4jh4SXLGuW+Y05qa0PPvPyMXIdN/Wl/jc6fL9nRcPJJ5sEejjlJ9m2vuY+AsX/yMvMsTvvlHZ/vMaDTNZvTMmTPLY5NepdqEUqVdy8zs+BOhcTFPPJU87SjfRi3t7234EvSgyx30jlL2lK0Tb4JQnx0OpAMGk5VjxzyPdCMp+CsyPUTGrPnenu1mfJ7R+ZyMWdRpH6eT+yf7WcqmZ4uxnkrr5xkTLJmKyyZ1SYtGZMsmYUy1gq0ZLFlLJsFYLWLK2LAgtYK2AIKWRZSxZUvBksWY7FgQZLFmOxYEGSxZjsWBBks6HUD9jL4j8kc1Z0fB9+xl8R/tRy5n+T70dGN8fBnUag0n0edRbqOVcT/AC93+O864+edmzma3o7LVOnLSMab/PCozXXyPsf8mGJc05jPvYl3bQ+H7Nicfwr1C5uWlYI8aT25ccd8695dfV3852AO5ONhvk41GRbdFf8Ax9aPkGHLKElOMnCSdxlG1JPqZ0ei8Mc0UlkxrPXvcZY5vtpV9EdDrTg9g0q5V6PI9vpIbm+dx3P6PrOfzcDc0X6mSGRcjfqy8Ko051NW088sLOxG/YuU+qPGl/3vMmXhrNqo6PGLrfLI5x8FFeZxmslKcpZEqTfGcEqUL6K5EdVDghpLe2UI9cm35WbfQOCGOFSzzeZr3UuJHv5X9BNO4Oxyhk1L2i0XXCXhr4HzbRMcnJSWxLe+fqPruotYQ0nDFwjxPRpY5Y1uhSVJdVbjR634J8eXH0ZrGnvxNtRi+Tiuns8vLc8H9Vf8PE4ykpTnK5ONqK5kr39pVtQjs5Px8ixkVKqn3GtvXGyN+/Vfw3BoeFOl8TCsSfrZZeEI7W/Gl3s3WXJGEXOTUYxVyk9ySPn+tNOek5Z5Hsj+WMX7sVydvL3mFxwo6zvzryt2+bvq04b/ACPDpT9TJ8Of7WcomdTpL9TJ8Of7WcmmTY2M8/VqZEyyZjTJs2KQZEyyZjTCYKtGayLK2LJkqXsWY7FgQZLBjskCDHYsixZSS8E2LIsWJEE2LIsWJEE2LIsWJEE2dDwdn7PLHlWRS7nGv/LOds92qdLWLInJ1Ca4k+rml4+bMr1LqoaRpafNqTOrbM2iaXLBNTi9q2NPdKPLFnnshs+bTpqjtVTTlHd6Bp0NIhxoPaq40H+aD5mew+d4M88UlOEnCS3NeT511HR6DwkhKo54+jl04W4vtW9fU77d9P4tGfSs5tNWlej8P5xOhBhw54ZFxoSjNc8WmjMbncACsmkrbpLle4AsY8k1CLlJqMYq226SXO2avTdfYMNpP0s+jB7O+W7zZy2sta5dKfrPiwTuOOP5F1vr639CjrS7Tjv5tu1s959S/b9M9WvdcvSH6OFrDF3zPJJcrXNzLv7NNZAMXrtPhXb1Vyp1VPUw6bPi4sr5sc/GthyqNzrzSkorCntlUp9UVuXjt7jTG9tQjMklMiyEy8kF7LJmOyUxJBksWUsmyZIJsWRYsSQWsFbBEiCliyLFkF4JsWRYsCCbFkWLAgmxZFiwIJsWRYsCDbat1u8SWPJcoLZGS2ygubrRvsGk48quE4z7HtXat6OLsrKKe3c+RmNdmmpzsNKa2tGdyyDhXlmvfn80h6afTn80insO0tzjuotxfGi3Frli3a70eqGtdJjsWaf+T43nZ879NPpz+aQ9LPpy+aRZWWt5Krqp+Fx3Sj6M9caU9+afckvJHjz58mT9SUsna5S8zhfSz6c/mkPSz6cvmkT7N9Yqrrq0dTfe5O1IOL9LPpy+aQ9JPpz+aRPs+0z5p2UpKKuTSXO3SNXput4RTjjrJLpe5H+Tn5Nve2+1tkolUJEc0vKbk3KTblJ2297YKk2aAkkrYsEGSyCBYIgtYsixYEE2LIsWBBawVsAQUBFiyCxIIsWASLIsWASCLFgEgixYBIIsWAS1ZilGjJYBK0MRJLiVBYkAAAkgAEgAEFgQAQWJIAIJBFiwCQRYsAkEWLAJBFkgEAqCpJYFATALgqBALAoSIBYFQQCwKAmAXBUEAsUaJABUFmiCxJAJBEkgAAAkgkghgsVBJBYFQQCwKgmAWBQCAXBQCASQASASQACQAVAABLAIACAABIBIAABAIQJDAIBBABLLAAEgAAEkWTYBCIK8Z87HGfOyASCeM+dlocpIIG4kgAkqAAAf/9k="
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Netflix Logo"
      />
      </div>
  )
}

export default Nav;