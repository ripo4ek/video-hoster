using System;
using System.Collections.Generic;
using System.Text;

namespace VideoHoster.Domain.Base
{
    public class TitleConnection
    {
        public TitleBase Source { get; set; }
        public TitleBase Target { get; set; }
        public string SourceTarget { get; set; }
        public string TargetSource { get; set; }
    }
}
